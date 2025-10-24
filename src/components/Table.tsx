import type React from "react";
import { useEffect, useMemo, useState } from "react";
import style from "./Table.module.scss";

export type SortState = {
  headerKey: string;
  direction: "asc" | "desc";
};

export type TableColumn<T> = {
  key: string;
  label: string;
  sortable?: boolean;
  accessor?: (item: T) => string | number | null | undefined;
  render?: (item: T) => React.ReactNode;
  sortAccessor?: (item: T) => string | number | Date | null | undefined;
  // Optional column-level aria-label override for the sort button
  ariaLabel?: string;
};

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  getRowId?: (row: T, index: number) => React.Key;
}

const Table = <T extends object>({
  columns,
  data,
  caption,
  getRowId,
}: TableProps<T>) => {
  const [sortState, setSortState] = useState<SortState | null>(null);

  // Pick first sortable column by default
  useEffect(() => {
    const firstSortable = columns.find((c) => c.sortable);
    if (firstSortable) {
      setSortState({ headerKey: firstSortable.key, direction: "asc" });
    } else {
      setSortState(null);
    }
  }, [columns]);

  const headerByKey = useMemo(() => {
    const map = new Map<string, TableColumn<T>>();
    for (const c of columns) map.set(c.key, c);
    return map;
  }, [columns]);

  const sortedData = useMemo(() => {
    if (!sortState) return data;
    const col = headerByKey.get(sortState.headerKey);
    if (!col) return data;

    const getVal = col.sortAccessor ?? col.accessor;
    if (!getVal) return data;

    const arr = [...data];
    arr.sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      if (av == null || bv == null) return 0;

      // number
      if (typeof av === "number" && typeof bv === "number") {
        return sortState.direction === "asc" ? av - bv : bv - av;
      }

      // date
      if (av instanceof Date && bv instanceof Date) {
        return sortState.direction === "asc"
          ? av.getTime() - bv.getTime()
          : bv.getTime() - av.getTime();
      }

      // string-ish
      const aStr = String(av);
      const bStr = String(bv);
      return sortState.direction === "asc"
        ? aStr.localeCompare(bStr, undefined, { numeric: true })
        : bStr.localeCompare(aStr, undefined, { numeric: true });
    });
    return arr;
  }, [data, sortState, headerByKey]);

  const toggleSort = (headerKey: string) => {
    setSortState((prev) => {
      if (!prev || prev.headerKey !== headerKey) {
        return { headerKey, direction: "asc" };
      }
      return {
        headerKey,
        direction: prev.direction === "asc" ? "desc" : "asc",
      };
    });
  };

  const getAriaSort = (
    key: string,
    sortable?: boolean,
  ): React.AriaAttributes["aria-sort"] => {
    if (!sortable) return undefined;
    if (sortState?.headerKey !== key) return "none";
    return sortState.direction === "asc" ? "ascending" : "descending";
  };

  return (
    <table className={style.table}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {columns.map(({ key, label, sortable, ariaLabel }) => {
            const isActive = sortState?.headerKey === key;
            const isAsc = isActive && sortState.direction === "asc";
            const isDesc = isActive && sortState.direction === "desc";

            return (
              <th key={key} aria-sort={getAriaSort(key, sortable)}>
                <button
                  type="button"
                  className={`${style.thButton} ${sortable ? style.sortable : ""}`}
                  onClick={sortable ? () => toggleSort(key) : undefined}
                  disabled={!sortable}
                  aria-label={
                    sortable
                      ? `${ariaLabel ?? label}: sort ${
                          isActive
                            ? isAsc
                              ? "descending"
                              : "ascending"
                            : "ascending"
                        }`
                      : undefined
                  }
                >
                  <span className={style.label}>{label}</span>
                  {sortable && (
                    <span className={style.sortIndicators} aria-hidden="true">
                      <span
                        className={`${style.sortArrow} ${
                          isAsc ? style.activeArrow : ""
                        }`}
                      >
                        ▲
                      </span>
                      <span
                        className={`${style.sortArrow} ${
                          isDesc ? style.activeArrow : ""
                        }`}
                      >
                        ▼
                      </span>
                    </span>
                  )}
                </button>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData.map((row, i) => (
          <tr
            key={getRowId?.(row, i)}
            className={i % 2 === 0 ? style.evenRow : style.oddRow}
          >
            {columns.map((col) => (
              <td key={col.key}>
                {col.render
                  ? col.render(row)
                  : String(col.accessor?.(row) ?? "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

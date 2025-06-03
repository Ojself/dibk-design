// Table.tsx

import React from 'react';
import style from './Table.module.scss';
import { classNameArrayToClassNameString } from '../functions/helpers';

export interface TableProps {
  captionAlign?: 'left' | 'center' | 'right';
  captionSide?: 'top' | 'bottom';
  children?: React.ReactNode;
}

const getCaptionAlignClass = (align?: string) => {
  const fallback = 'left';
  const valid = ['left', 'center', 'right'];
  return align && valid.includes(align)
    ? style[`captionAlign-${align}`]
    : style[`captionAlign-${fallback}`];
};

const getCaptionSideClass = (side?: string) => {
  const fallback = 'top';
  const valid = ['top', 'bottom'];
  return side && valid.includes(side)
    ? style[`captionSide-${side}`]
    : style[`captionSide-${fallback}`];
};

const Table = ({ captionAlign, captionSide, children }: TableProps) => {
  const className = classNameArrayToClassNameString([
    style.table,
    getCaptionAlignClass(captionAlign),
    getCaptionSideClass(captionSide),
  ]);

  return <table className={className}>{children}</table>;
};

export default Table;

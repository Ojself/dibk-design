import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import { cloneThroughFragments } from '../functions/helpers';
import asterisk from '../assets/svg/asterisk.svg?url';
import style from './RadioButtonList.module.scss';
import Header from './Header';

export interface RadioButtonListProps {
  legend?: string;
  legendSize?: 1 | 2 | 3 | 4 | 5;
  required?: boolean;
  compact?: boolean;
  children?: ReactNode;
}

const RadioButtonList = ({
  legend,
  legendSize,
  required = false,
  compact = false,
  children,
}: RadioButtonListProps) => {
  const renderChildElements = (childElements: ReactNode[]) => {
    const flattened = cloneThroughFragments(childElements);
    return flattened.map((child, index) => {
      if (
        isValidElement<{ requiredGroup: boolean; compact?: boolean }>(child) &&
        (child.type as any)?.displayName === 'RadioButtonListItem'
      ) {
        return cloneElement(child, {
          requiredGroup: required,
          compact,
          key: `radioButtonListItem-${index}`,
        });
      }
      return child;
    });
  };

  return (
    <fieldset className={style.radioButtonList}>
      {!!legend?.length && (
        <legend>
          {legendSize ? <Header size={legendSize}>{legend}</Header> : legend}
          {required && (
            <img src={asterisk} alt="" className={style.requiredSymbol} />
          )}
        </legend>
      )}
      {renderChildElements(Children.toArray(children))}
    </fieldset>
  );
};

export default RadioButtonList;

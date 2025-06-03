import type { JSX } from 'react';
import React from 'react';
import style from './Header.module.scss';
import { classNameArrayToClassNameString } from '../functions/helpers';

export interface HeaderProps {
  id?: string;
  content?: string;
  size?: 1 | 2 | 3 | 4 | 5;
  big?: boolean;
  label?: string;
  htmlTag?: keyof JSX.IntrinsicElements;
  htmlFor?: string;
  children?: React.ReactNode;
}

const Header = ({
  id,
  content,
  size = 1,
  big,
  label,
  htmlTag,
  htmlFor,
  children,
}: HeaderProps) => {
  const tag = htmlTag || (`h${size}` as keyof JSX.IntrinsicElements);

  const className = classNameArrayToClassNameString([
    style.header,
    style[`size-${size}`],
    big && style.bigHeader,
  ]);

  const labelStyle =
    label?.length && typeof label === 'string'
      ? ({ '--label': `"${label}"` } as React.CSSProperties)
      : undefined;

  const headerElement = React.createElement(
    tag,
    {
      className,
      id: id || undefined,
      htmlFor: htmlFor || undefined,
      style: labelStyle,
    },
    content?.length ? content : children
  );

  return <div className={style.headerContainer}>{headerElement}</div>;
};

export default Header;

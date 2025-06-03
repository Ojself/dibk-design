// Label.tsx

import React from 'react';
import type { JSX } from 'react';
import style from './Label.module.scss';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  inline?: boolean;
  normalCursor?: boolean;
  htmlTag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const Label = ({
  inline = false,
  normalCursor = false,
  htmlTag = 'label',
  children,
  id,
  ...rest
}: LabelProps) => {
  const className = [
    style.label,
    inline && style.inline,
    normalCursor && style.normalCursor,
  ]
    .filter(Boolean)
    .join(' ');

  const tagProps = {
    ...rest,
    className,
    id: id || undefined,
  };

  return React.createElement(htmlTag, tagProps, children);
};

export default Label;

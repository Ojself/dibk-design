// DescriptionDetails.tsx

import React from 'react';
import style from './DescriptionDetails.module.scss';
import { classNameArrayToClassNameString } from '../functions/helpers';

export interface DescriptionDetailsProps {
  compact?: boolean;
  titleWidth?: string;
  children?: React.ReactNode;
}

const DescriptionDetails = ({
  compact = false,
  titleWidth,
  children,
}: DescriptionDetailsProps) => {
  return (
    <dd
      className={classNameArrayToClassNameString([
        style.descriptionDetails,
        compact && style.compact,
      ])}
      style={
        { '--title-width': titleWidth || undefined } as React.CSSProperties
      }
    >
      {children}
    </dd>
  );
};

export default DescriptionDetails;

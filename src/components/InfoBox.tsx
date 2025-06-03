// InfoBox.tsx

import React from 'react';
import style from './InfoBox.module.scss';
import infoSign from '../assets/svg/info-sign.svg?url';

export interface InfoBoxProps {
  children?: React.ReactNode;
}

const InfoBox = ({ children = '' }: InfoBoxProps) => {
  return (
    <div className={style.infoBox}>
      <img src={infoSign} alt="" className={style.infoSign} />
      {children}
    </div>
  );
};

export default InfoBox;

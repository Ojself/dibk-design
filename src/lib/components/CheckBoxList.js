import React from 'react';
import style from './CheckBoxList.module.scss';

const CheckBoxList = (props) => {
    return (
      <ul className={style.checkBoxList}>
          {props.children}
      </ul>
    )
}


export default CheckBoxList;

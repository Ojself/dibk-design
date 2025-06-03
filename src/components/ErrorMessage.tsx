import React from 'react';
import style from './ErrorMessage.module.scss';
import errorSign from '../assets/svg/error-sign.svg?url';

export interface ErrorMessageProps {
  id?: string;
  content?: React.ReactNode;
}

const ErrorMessage = ({ id, content = '' }: ErrorMessageProps) => {
  const getErrorElementProps = (): React.HTMLAttributes<HTMLSpanElement> => ({
    id: id?.length ? id : undefined,
    className: style.errorMessage,
  });

  const hasContent =
    typeof content === 'string' ? content.trim().length > 0 : !!content;

  return hasContent ? (
    <span aria-live="polite" {...getErrorElementProps()}>
      <img src={errorSign} alt="" className={style.errorSign} />
      {content}
    </span>
  ) : null;
};

export default ErrorMessage;

import { Fragment } from 'react';
import './PDF.scss';

export interface PDFProps {
  children?: React.ReactNode;
  signedDocument?: boolean;
  orientation?: 'portrait' | 'landscape';
}

const PDF = ({ children }: PDFProps) => {
  return <Fragment>{children}</Fragment>;
};

export default PDF;

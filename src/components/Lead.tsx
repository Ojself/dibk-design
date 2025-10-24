import type { JSX } from "react";
import React from "react";
import style from "./Lead.module.scss";

export interface LeadProps {
  id?: string;
  htmlTag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const Lead = ({ id, htmlTag = "p", children }: LeadProps) => {
  return React.createElement(
    htmlTag,
    {
      className: style.lead,
      id: id || undefined,
    },
    children,
  );
};

export default Lead;

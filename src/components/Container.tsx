// Container.tsx

import type React from "react";
import style from "./Container.module.scss";

export interface ContainerProps {
  maxWidth?: string;
  children?: React.ReactNode;
}

const Container = ({ maxWidth, children }: ContainerProps) => {
  const styleProps: React.CSSProperties = {
    "--max-width": maxWidth?.length ? maxWidth : undefined,
  } as React.CSSProperties;

  return (
    <div className={style.container} style={styleProps}>
      {children}
    </div>
  );
};

export default Container;

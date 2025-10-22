import infoSign from "../assets/svg/info-sign.svg?url";
import { classNameArrayToClassNameString } from "../functions/helpers";
import style from "./ErrorBox.module.scss";

export interface ErrorBoxProps {
  type?: "warning" | "error";
  fullScreen?: boolean;
  children?: React.ReactNode;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({
  type = "warning",
  fullScreen = false,
  children = "",
}) => {
  return (
    <div
      className={classNameArrayToClassNameString([
        style.errorBoxContainer,
        style[type],
        fullScreen && style.fullScreen,
      ])}
    >
      <div
        className={classNameArrayToClassNameString([
          style.errorBox,
          fullScreen && style.fullScreen,
        ])}
      >
        <img src={infoSign} alt="" className={style.infoSign} />
        {children}
      </div>
    </div>
  );
};

export default ErrorBox;

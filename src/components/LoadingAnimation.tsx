// LoadingAnimation.tsx

import style from './LoadingAnimation.module.scss';

export interface LoadingAnimationProps {
  fixed?: boolean;
  message?: string;
}

const LoadingAnimation = ({
  fixed = false,

  message = '',
}: LoadingAnimationProps) => {
  const className = fixed
    ? `${style.loadingAnimation} ${style.fixed}`
    : style.loadingAnimation;

  return <div className={className}>{message}</div>;
};

export default LoadingAnimation;

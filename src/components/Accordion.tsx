import { useState, useEffect } from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

// Helpers
import { classNameArrayToClassNameString } from '../functions/helpers';

// Stylesheets
import style from './Accordion.module.scss';

type AccordionColor = 'default' | 'secondary';

export interface AccordionProps {
  title?: string;
  color?: AccordionColor;
  expanded?: boolean;
  onToggleExpand?: () => void;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  noMargin?: boolean;
  initialized?: boolean;
  children?: ReactNode;
  [key: string]: any;
}

const Accordion = ({
  title,
  color = 'default',
  expanded: expandedProp = false,
  onToggleExpand,
  buttonProps,
  noMargin = false,
  initialized: initializedProp,
  children,
  ...rest
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(expandedProp);
  const [initialized, setInitialized] = useState(initializedProp);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
    setInitialized(true);
    if (onToggleExpand) {
      onToggleExpand();
    }
  };

  useEffect(() => {
    setExpanded(expandedProp);
  }, [expandedProp]);

  const RenderPanel = () => {
    return (
      <button
        {...buttonProps}
        className={style.panel}
        onClick={handleToggleExpand}
        aria-expanded={expanded ? 'true' : 'false'}
      >
        <span className={style.panelText}>{title}</span>
        <span
          className={`${style.panelChevron} ${expanded ? style.expanded : ''}`}
        ></span>
      </button>
    );
  };

  const className = classNameArrayToClassNameString([
    style.accordion,
    color && style[color],
    !noMargin && style.margin,
  ]);
  return (
    <div className={className} {...rest}>
      <RenderPanel />
      <div
        className={`${style.content} ${initialized ? style.initialized : ''} ${
          expanded ? style.expanded : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;

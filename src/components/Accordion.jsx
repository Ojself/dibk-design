// Dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { classNameArrayToClassNameString } from '../functions/helpers';

// Stylesheets
import style from './Accordion.module.scss';

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(props.expanded);
  const [initialized, setInitialized] = useState(props.initialized);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
    setInitialized(true);
    if (props.onToggleExpand) {
      props.onToggleExpand();
    }
  };

  useEffect(() => {
    setExpanded(props.expanded);
  }, [props.expanded]);

  const renderPanel = () => {
    return (
      <button
        {...props.buttonProps}
        className={style.panel}
        onClick={handleToggleExpand}
        aria-expanded={expanded ? 'true' : 'false'}
      >
        <span className={style.panelText}>{props.title}</span>
        <span
          className={`${style.panelChevron} ${expanded ? style.expanded : ''}`}
        ></span>
      </button>
    );
  };

  const className = classNameArrayToClassNameString([
    style.accordion,
    props.color && style[props.color],
    !props.noMargin && style.margin,
  ]);
  return (
    <div className={className}>
      {renderPanel()}
      <div
        className={`${style.content} ${initialized ? style.initialized : ''} ${
          expanded ? style.expanded : ''
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  /** Content title inside box */
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['regular', 'large']),
  /** Text content inside box */
  content: PropTypes.string,
  color: PropTypes.oneOf(['default', 'secondary']),
  expanded: PropTypes.bool,
  onToggleExpand: PropTypes.func,
  buttonProps: PropTypes.object,
};

Accordion.defaultProps = {
  title: null,
  titleSize: 'regular',
  href: null,
  content: '',
  color: 'default',
  expanded: false,
  noMargin: false,
};

export default Accordion;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Helpers
import {
  classNameArrayToClassNameString,
  cloneThroughFragments,
} from '../functions/helpers';

// Styles
import style from './Button.module.scss';

/**
 * Primary UI component for user interaction
 */
const Button = (props) => {
  const { linkComponent: LinkComponent } = props;

  const getArrowClass = (arrow) => {
    switch (arrow) {
      case 'left':
        return style.hasArrowLeft;
      case 'right':
        return style.hasArrowRight;
      default:
        return '';
    }
  };

  let buttonProps = {
    ...props,
    'aria-invalid': props.hasErrors || null,
    href: !props.disabled && props.href?.length ? props.href : null,
  };

  // Clean out non-HTML props
  delete buttonProps.noHover;
  delete buttonProps.hasErrors;
  delete buttonProps.rounded;
  delete buttonProps.inputType;
  delete buttonProps.color;
  delete buttonProps.content;
  delete buttonProps.arrow;
  delete buttonProps.noMargin;
  delete buttonProps.linkComponent;

  const buttonColor =
    props?.inputType === 'radio'
      ? props.defaultChecked
        ? 'primary'
        : 'secondary'
      : props.color;

  const className = classNameArrayToClassNameString([
    style.button,
    style[buttonColor],
    style[props.size],
    getArrowClass(props.arrow),
    props.noHover || props?.inputType === 'radio' ? style.noHover : null,
    props.rounded && style.rounded,
    props.hasErrors && style.hasErrors,
    props.disabled && style.disabled,
    props.noMargin && style.noMargin,
  ]);

  const renderLinkWrappedChildren = (childElements) => {
    const flattened = cloneThroughFragments(childElements);
    return flattened.map((childElement, index) => {
      const isLink =
        LinkComponent &&
        childElement?.type === LinkComponent &&
        childElement?.props?.to;

      if (!buttonProps.disabled && isLink) {
        const childElementCopy = React.cloneElement(childElement, {
          className: className,
          key: `button-${index}`,
          to: childElement.props.to,
        });
        return childElementCopy;
      }

      return (
        <button {...buttonProps} key={`button-${index}`} className={className}>
          {props.content || childElement.props.children}
        </button>
      );
    });
  };

  if (props.inputType === 'button') {
    return (
      <input
        {...buttonProps}
        className={className}
        type="button"
        value={props.content}
      />
    );
  }

  if (props.inputType === 'radio') {
    return (
      <label className={className}>
        <input {...buttonProps} type="radio" />
        {props.content}
      </label>
    );
  }

  if (props.href?.length && !props.disabled) {
    return (
      <a {...buttonProps} className={className}>
        {props.content || props.children}
      </a>
    );
  }

  const isLinkWrapped =
    LinkComponent && props?.children?.type === LinkComponent;

  if (isLinkWrapped) {
    return (
      <Fragment>
        {renderLinkWrappedChildren(React.Children.toArray(props.children))}
      </Fragment>
    );
  }

  return (
    <button {...buttonProps} className={className}>
      {props.content || props.children}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'regular']),
  arrow: PropTypes.oneOf(['none', 'left', 'right']),
  disabled: PropTypes.bool,
  inputType: PropTypes.oneOf(['button', 'radio']),
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  hasErrors: PropTypes.bool,
  'aria-describedby': PropTypes.string,
  noHover: PropTypes.bool,
  rounded: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  noMargin: PropTypes.bool,
  linkComponent: PropTypes.elementType,
};

Button.defaultProps = {
  color: 'primary',
  size: 'regular',
  disabled: false,
  hasErrors: false,
  noHover: false,
  arrow: 'none',
  noMargin: false,
};

export default Button;

import React, {
  Fragment,
  Children,
  cloneElement,
  type ReactElement,
} from 'react';
import {
  classNameArrayToClassNameString,
  cloneThroughFragments,
} from '../functions/helpers';

import { Link as RouterLink } from 'react-router-dom';

import style from './Button.module.scss';

type ArrowDirection = 'none' | 'left' | 'right';
type ButtonSize = 'small' | 'regular';
export type ButtonColor = 'primary' | 'secondary';
export type InputType = 'button' | 'radio';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  content?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  arrow?: ArrowDirection;
  inputType?: InputType;
  name?: string;
  defaultChecked?: boolean;
  required?: boolean;
  hasErrors?: boolean;
  'aria-describedby'?: string;
  noHover?: boolean;
  rounded?: boolean;
  href?: string;
  noMargin?: boolean;
  children?: React.ReactNode;
  [key: string]: any; // Allow additional props
}

const Button = ({
  content,
  color = 'primary',
  size = 'regular',
  arrow = 'none',
  disabled = false,
  inputType,
  defaultChecked,
  hasErrors = false,
  noHover = false,
  rounded = false,
  noMargin = false,
  href,
  children,
  ...rest
}: ButtonProps) => {
  const getArrowClass = (arrow: ArrowDirection): string => {
    switch (arrow) {
      case 'left':
        return style.hasArrowLeft;
      case 'right':
        return style.hasArrowRight;
      default:
        return '';
    }
  };

  const buttonColor =
    inputType === 'radio' ? (defaultChecked ? 'primary' : 'secondary') : color;

  const className = classNameArrayToClassNameString([
    style.button,
    style[buttonColor],
    style[size],
    getArrowClass(arrow),
    noHover || inputType === 'radio' ? style.noHover : null,
    rounded && style.rounded,
    hasErrors && style.hasErrors,
    disabled && style.disabled,
    noMargin && style.noMargin,
  ]);

  const buttonProps = {
    'aria-invalid': hasErrors || undefined,
    href: !disabled && href?.length ? href : undefined,
    className, // Always include className in buttonProps for all elements
    ...rest,
  };

  const renderLinkWrappedChildren = (
    childElements: React.ReactNode[]
  ): React.ReactNode => {
    // Ensure flattened is always an array
    const flattened = React.Children.toArray(
      cloneThroughFragments(childElements)
    );
    return flattened.map((childElement, index) => {
      if (!React.isValidElement(childElement)) return null;
      // Use type assertion to ReactElement<any, any> for safe props access
      const element = childElement as ReactElement<any, any>;
      const isLink =
        element.type === RouterLink &&
        typeof element.props === 'object' &&
        element.props !== null &&
        'to' in element.props;

      if (!disabled && isLink) {
        return cloneElement(element, {
          className,
          key: `button-${index}`,
          to: element.props.to,
        });
      }

      return (
        <button {...buttonProps} key={`button-${index}`}>
          {content || (element.props && element.props.children)}
        </button>
      );
    });
  };

  if (inputType === 'button') {
    // Only pass input-allowed props
    const inputProps = { ...buttonProps };
    delete inputProps.href;
    return (
      <button type="button" {...buttonProps}>
        {content || children}
      </button>
    );
  }

  if (inputType === 'radio') {
    const inputProps = { ...buttonProps };
    delete inputProps.href;
    return (
      <label className={className}>
        <input
          {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
          type="radio"
        />
        {content}
      </label>
    );
  }

  if (href?.length && !disabled) {
    // Only pass anchor-allowed props
    const anchorProps = { ...buttonProps };
    // Remove 'type' if present
    if ('type' in anchorProps) delete (anchorProps as any).type;
    return (
      <a {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content || children}
      </a>
    );
  }

  const isLinkWrapped =
    React.isValidElement(children) && children.type === RouterLink;

  if (isLinkWrapped) {
    return (
      <Fragment>
        {renderLinkWrappedChildren(Children.toArray(children))}
      </Fragment>
    );
  }

  return <button {...buttonProps}>{content || children}</button>;
};

export default Button;

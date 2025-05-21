import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { classNameArrayToClassNameString } from '../functions/helpers';
import style from './Step.module.scss';
import checkmarkSymbol from '../assets/svg/checkmark-symbol.svg?url';

const Step = (props) => {
  const {
    step,
    index,
    activeStepId,
    direction,
    linkComponent: LinkComponent,
  } = props;

  const getActiveClass = (step) =>
    activeStepId === step.id ? style.active : '';
  const getFinishedClass = (step) => (step.finished ? style.finished : '');
  const getErrorClass = (step) => (step.hasErrors ? style.hasErrors : '');

  const renderStepContent = () => {
    const isActiveStep = activeStepId === step.id;
    const isVertical = direction === 'vertical';
    const showCheckmark = isVertical && step.finished && !isActiveStep;
    return (
      <>
        <span className={style.stepNumber}>{index + 1}</span>
        <span className={style.stepName}>{step.name}</span>
        {showCheckmark && (
          <img src={checkmarkSymbol} alt="" className={style.checkmarkSymbol} />
        )}
      </>
    );
  };

  const baseClassNames = classNameArrayToClassNameString([
    style.wizardTopnavItem,
    getActiveClass(step),
    getFinishedClass(step),
    getErrorClass(step),
    style[direction],
  ]);

  const ariaCurrent = activeStepId === step.id ? 'step' : null;

  if (step.link && Object.keys(step.link).length && LinkComponent) {
    return (
      <li className={baseClassNames}>
        <LinkComponent
          to={step.link}
          aria-current={ariaCurrent}
          className={style.wizardTopnavItemContent}
        >
          {renderStepContent()}
        </LinkComponent>
      </li>
    );
  }

  return (
    <li className={baseClassNames}>
      <span
        aria-current={ariaCurrent}
        className={style.wizardTopnavItemContent}
      >
        {renderStepContent()}
      </span>
    </li>
  );
};

Step.propTypes = {
  step: PropTypes.object.isRequired,
  activeStepId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  linkComponent: PropTypes.elementType,
};

Step.defaultProps = {
  direction: 'vertical',
};

export default Step;

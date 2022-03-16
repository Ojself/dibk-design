// Dependencies
import React from 'react';

// Stylesheets
import style from './ProgressBar.module.scss';

const ProgressBar = ({ progress, hasErrors }) => {
    const scssValueProperty = '--value';
    return (
        <div className={`${style.progressBar} ${hasErrors ? style.hasErrors : ''}`} role="progressbar" aria-valuenow={progress || 0} aria-valuemin="0" aria-valuemax="100" style={{ [scssValueProperty]: progress || 0 }}></div>
    )
}

export default ProgressBar;

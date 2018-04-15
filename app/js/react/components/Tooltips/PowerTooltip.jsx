import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';

export const PowerTooltip = ({ power }) => {
    const subtitle = i18n.text.power;

    return (
        <div className="tooltip tooltip-detailed power-tooltip">
            <div className="tooltip-banner">
                <h3 className="tooltip-title">{power.name}</h3>
                <p className="tooltip-subtitle">{subtitle}</p>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text">
                    {TextInterpolator.get(power.description)}
                </div>
                {!!power.flavor && (
                    <div className="tooltip-flavor">{power.flavor}</div>
                )}
                <div className="tooltip-background" />
            </div>
        </div>
    );
};

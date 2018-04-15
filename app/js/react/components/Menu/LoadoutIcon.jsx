import React from 'react';
import { Config } from '../../../services';
import { i18n } from '../../../i18n';
import { Types } from '../../../data';
import { Tooltip } from '../Tooltips';

export const LoadoutIcon = ({ onClick, enabled = true }) => (
    <div
        className={`icon icon-loadout tooltip-activator ${
            enabled ? '' : 'disabled'
        }`}
        onClick={onClick}
    >
        <img
            className="icon-foreground"
            src={`${Config.basePath}images/icon-loadout.png`}
        />
        <img
            className="icon-background"
            src={`${Config.basePath}images/addon_background.png`}
        />
        <Tooltip body={i18n.text.loadout} />
    </div>
);

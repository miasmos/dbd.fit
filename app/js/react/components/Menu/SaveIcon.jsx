import React from 'react';
import { Config } from '../../../services';
import { i18n } from '../../../i18n';
import { Types } from '../../../data';
import { Tooltip } from '../Tooltips';

export const SaveIcon = ({ onClick, enabled = true }) => (
    <div
        className={`icon icon-save tooltip-activator ${
            enabled ? '' : 'disabled'
        }`}
        onClick={onClick}
    >
        <img
            className="icon-foreground"
            src={`${Config.basePath}images/icon-save.png`}
        />
        <img
            className="icon-background"
            src={`${Config.basePath}images/addon_background.png`}
        />
        <Tooltip body={i18n.text.save} />
    </div>
);

import React from 'react';
import { Config } from '../../../services';
import { i18n } from '../../../i18n';
import { Types } from '../../../data';
import { Tooltip } from '../Tooltips';

export const EditLoadoutIcon = ({ onClick, enabled = true, show = true }) => (
    <div
        className={`icon icon-edit tooltip-activator ${
            enabled ? '' : 'disabled'
        } ${show ? '' : 'hide-block'}`}
        onClick={onClick}
    >
        <img
            className="icon-foreground"
            src={`${Config.basePath}images/icon-edit.png`}
        />
        <img
            className="icon-background"
            src={`${Config.basePath}images/addon_background.png`}
        />
        <Tooltip body={i18n.text.editLoadout} />
    </div>
);

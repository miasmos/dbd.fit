import React from 'react';
import { Config } from '../../../services';
import { i18n } from '../../../i18n';
import { Types } from '../../../data';
import { Tooltip } from '../Tooltips';

export const PlayersIcon = ({
    store,
    onClick,
    enabled = true,
    show = true
}) => (
    <div
        className={`icon icon-players tooltip-activator ${
            enabled ? '' : 'disabled'
        } ${show ? '' : 'hide-block'}`}
        onClick={onClick}
    >
        <img
            className="icon-foreground"
            src={`${Config.basePath}images/icon-players.png`}
        />
        <img
            className="icon-background"
            src={`${Config.basePath}images/addon_background.png`}
        />
        <Tooltip
            body={
                store.type === Types.SURVIVOR
                    ? i18n.text.survivors
                    : i18n.text.killers
            }
        />
    </div>
);

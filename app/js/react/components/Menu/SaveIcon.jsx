import React from 'react';

export const SaveIcon = ({ onClick, enabled }) => (
    <div
        className={`icon icon-save ${enabled ? '' : 'disabled'}`}
        onClick={onClick}
    >
        <img className="icon-foreground" src="images/icon-save.png" />
        <img className="icon-background" src="images/addon_background.png" />
    </div>
);

import React from 'react';

export const Tooltip = ({ body }) => {
    return (
        <div className="tooltip">
            <div className="tooltip-body">
                <div className="tooltip-text">{body}</div>
                <div className="tooltip-background" />
            </div>
        </div>
    );
};

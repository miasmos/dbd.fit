import React from 'react';

export const Tooltip = ({ body }) => {
    return (
        <div className="tooltip">
            <div className="body">
                <div className="text">{body}</div>
                <div className="background" />
            </div>
        </div>
    );
};

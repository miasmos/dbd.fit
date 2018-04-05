import React from 'react';

export const BoldSpan = ({ text, comma = false }) => (
    <span className="font-regular-bold">
        {text}
        {!!comma ? ', ' : ''}
    </span>
);

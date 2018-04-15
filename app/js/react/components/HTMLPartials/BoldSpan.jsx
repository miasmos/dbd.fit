import React from 'react';
import { TextInterpolator } from '../../TextInterpolator';

export const BoldSpan = ({ text, comma = false }) => (
    <span className="font-regular-bold">
        {TextInterpolator.get(text)}
        {!!comma ? ', ' : ''}
    </span>
);

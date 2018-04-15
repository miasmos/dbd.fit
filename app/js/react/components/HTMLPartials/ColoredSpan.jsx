import React from 'react';
import { TextInterpolator } from '../../TextInterpolator';

export const ColoredSpan = ({ text, comma = false }) => (
    <span className="font-colored">
        {TextInterpolator.get(text)}
        {!!comma ? ', ' : ''}
    </span>
);

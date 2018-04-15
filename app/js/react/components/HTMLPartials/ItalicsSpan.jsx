import React from 'react';
import { TextInterpolator } from '../../TextInterpolator';

export const ItalicsSpan = ({ text, comma = false }) => (
    <span className="font-regular-italics">
        {TextInterpolator.get(text)}
        {!!comma ? ', ' : ''}
    </span>
);

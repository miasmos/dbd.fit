import React from 'react';
import { BoldSpan } from './components/HTMLPartials';
import { ItalicsSpan } from './components/HTMLPartials';
import { ColoredSpan } from './components/HTMLPartials';

const delimiters = ['b', 'i', 'c'];

export class TextInterpolator {
    static get(text) {
        return this.build(text);
    }

    static build(text) {
        let result = [text],
            typeMap = [false];

        for (let delimiter of delimiters) {
            for (let index in result) {
                let text = result[index];

                const split = this.split(text, delimiter);
                if (split.length > 1) {
                    result.splice(index, 1, ...split);

                    const ins = split.map((value1, index1) => {
                        if ((index1 - 1) % 2 === 0) {
                            return delimiter;
                        } else {
                            return false;
                        }
                    });
                    typeMap.splice(index, 1, ...ins);
                }

                index += split.length - 1;
            }
        }

        return result.map((value, index) => {
            if (typeMap[index]) {
                switch (typeMap[index]) {
                    case 'b':
                        return <BoldSpan key={index} text={value} />;
                    case 'i':
                        return <ItalicsSpan key={index} text={value} />;
                    case 'c':
                        return <ColoredSpan key={index} text={value} />;
                    default:
                        return value;
                }
            } else {
                return value;
            }
        });
    }

    static split(text, delimiter) {
        const regex = new RegExp(`%${delimiter}(.*?)%\/${delimiter}`);

        return text.split(regex);
    }
}

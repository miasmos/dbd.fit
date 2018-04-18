import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from '../../i18n';
import { Config } from '../../services';

export const Footer = () => (
    <div className="footer">
        <p>
            made with
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/PooleStephen"
            >
                <img
                    className="icon icon-heart"
                    src={`${Config.basePath}images/icon-heart.png`}
                />
            </a>
            by
            <a
                className="nnehl"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/PooleStephen"
            >
                nnehl
            </a>
        </p>
    </div>
);

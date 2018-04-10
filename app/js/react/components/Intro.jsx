import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from '../../i18n';

export const Intro = () => (
    <div className="intro">
        <Link to="/type">
            <div className="intro-wrapper">
                <div className="intro-inner">
                    <img src="images/logo.png" />
                    <h3 className="instruction">{i18n.text.continue}</h3>
                    <h2 className="title">{i18n.text.dbd}</h2>
                    <p className="text">{i18n.text.unofficial}</p>
                    <p className="text">{i18n.text.loadoutCompanion}</p>
                </div>
            </div>
        </Link>
    </div>
);

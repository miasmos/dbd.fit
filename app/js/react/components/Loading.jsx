import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from '../../i18n';
import { Config } from '../../services';

export const Loading = () => (
    <div className="loading">
        <img
            className="spinner"
            src={`${Config.basePath}images/icon-loading.png`}
        />
    </div>
);

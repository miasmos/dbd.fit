import React from 'react';
import { Tooltip } from './Tooltips';
import { Types } from '../../data';
import { i18n } from '../../i18n';
import { Link } from 'react-router-dom';

export class TypeSelector extends React.Component {
    render() {
        return (
            <div className="type-selector">
                <Link
                    to="/build/survivors"
                    onClick={this.setType.bind(this, Types.SURVIVOR)}
                >
                    <div className="selection tooltip-activator">
                        <img src="images/help/survivor.png" />
                        <Tooltip body={i18n.text.playAsSurvivor} />
                    </div>
                </Link>
                <Link
                    to="/build/killers"
                    onClick={this.setType.bind(this, Types.KILLER)}
                >
                    <div className="selection tooltip-activator">
                        <img src="images/help/killer.png" />
                        <Tooltip body={i18n.text.playAsKiller} />
                    </div>
                </Link>
            </div>
        );
    }

    setType(type) {
        this.props.store.setType(type);
    }
}

import React from 'react';
import { SaveIcon } from './SaveIcon';
import { API, Serializer } from '../../../services/API';

export class Menu extends React.Component {
    render() {
        const { valid } = this.props.store;
        return (
            <div className="menu">
                <SaveIcon
                    enabled={valid}
                    onClick={this.onSaveClicked.bind(this)}
                />
            </div>
        );
    }

    onSaveClicked() {
        const { valid } = this.props.store;

        if (valid) {
            API.save(Serializer.build(this.props.store))
                .then(json => {
                    console.log(json);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

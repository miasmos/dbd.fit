import React from 'react';
import { SaveIcon } from './SaveIcon';
import { PlayersIcon } from './PlayersIcon';
import { SwitchIcon } from './SwitchIcon';
import { API, Serializer } from '../../../services/API';
import { Types } from '../../../data';

export class Menu extends React.Component {
    render() {
        const { valid } = this.props.store;
        return (
            <div className="menu">
                <PlayersIcon
                    onClick={this.onPlayersClicked.bind(this)}
                    store={this.props.store}
                />
                <SwitchIcon
                    onClick={this.onSwitchClicked.bind(this)}
                    store={this.props.store}
                />
                <SaveIcon
                    enabled={valid}
                    onClick={this.onSaveClicked.bind(this)}
                />
            </div>
        );
    }

    onSaveClicked() {
        const { valid, setURI, setEditing } = this.props.store;

        if (valid) {
            API.save(Serializer.build(this.props.store))
                .then(json => {
                    setEditing(false);
                    this.props.history.replace(`/${json.uri}`);
                    setURI(json.uri, true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    onSwitchClicked() {
        const { store, history } = this.props;
        const newType =
            store.type === Types.SURVIVOR ? Types.KILLER : Types.SURVIVOR;

        store.reset();
        store.setType(newType);
        history.replace(
            newType === Types.SURVIVOR ? '/build/survivors' : '/build/killers'
        );
    }

    onPlayersClicked() {
        const { store, history } = this.props;

        if (store.type === Types.KILLER) {
            store.setAddon(0); // reset to blank addons
            store.setAddon(1);
            store.setPage(0);
            store.setValidity(false);
        }
        history.replace(
            store.type === Types.SURVIVOR
                ? '/build/survivors'
                : '/build/killers'
        );
    }
}

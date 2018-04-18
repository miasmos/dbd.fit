import React from 'react';
import { SaveIcon } from './SaveIcon';
import { PlayersIcon } from './PlayersIcon';
import { SwitchIcon } from './SwitchIcon';
import { EditLoadoutIcon } from './EditLoadoutIcon';
import { NewLoadoutIcon } from './NewLoadoutIcon';
import { API, Serializer } from '../../../services/API';
import { Types, ModifierTypes } from '../../../data';
import { i18n } from '../../../i18n';

export class Menu extends React.Component {
    render() {
        const { valid, editing } = this.props.store;
        return (
            <div className="menu">
                <NewLoadoutIcon
                    enabled={!editing}
                    show={!editing}
                    onClick={this.onNewLoadoutClicked.bind(this)}
                />
                <EditLoadoutIcon
                    enabled={!editing}
                    show={!editing}
                    onClick={this.onEditLoadoutClicked.bind(this)}
                />
                <PlayersIcon
                    onClick={this.onPlayersClicked.bind(this)}
                    show={editing}
                    store={this.props.store}
                />
                <SwitchIcon
                    onClick={this.onSwitchClicked.bind(this)}
                    show={editing}
                    store={this.props.store}
                />
                <SaveIcon
                    enabled={valid}
                    onClick={this.onSaveClicked.bind(this)}
                    show={editing}
                />
            </div>
        );
    }

    onEditLoadoutClicked() {
        const { store } = this.props;
        store.setContext(ModifierTypes.PERK);
        store.setTarget(0);
        store.setEditing(true);
        store.setValidity(false);
        store.setPage(0);
        store.setSubmitted(false);
        store.captchaReset();
        store.setTitle(i18n.text.loadout);
        this.props.history.replace('/build/loadout');
    }

    onNewLoadoutClicked() {
        const { store } = this.props;
        store.setEditing(true);
        store.reset();
        this.props.history.replace('/');
    }

    onSaveClicked() {
        const { valid, submitted } = this.props.store;

        if (valid && !submitted) {
            this.props.store.setSubmitted(true);
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

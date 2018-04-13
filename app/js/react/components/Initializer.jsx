import React from 'react';
import { API } from '../../services/API';
import * as Factories from '../../factories';
import { Redirect } from 'react-router-dom';

export class Initializer extends React.Component {
    componentDidMount() {
        const { params } = this.props.match;
        const { history } = this.props;

        API.get({ hash: params.hash })
            .then(json => {
                console.log(json);
                this.hydrate(json);
                history.replace('/build/loadout');
            })
            .catch(error => {
                history.replace('/');
            });
    }

    hydrate({ type, player, power, addons, perks, offering, tiers, name }) {
        const { store } = this.props;

        store.setType(type);
        store.setPlayer(player);
        store.setOffering(offering);
        store.setTitle(name);

        perks.map((value, index) => {
            const perk = Factories.AllPerkFactory.get(value);
            perk.setTier(tiers[index]);
            store.setPerk(index, perk);
        });

        addons.map((value, index) => {
            const addon = Factories.AllAddonFactory.get(value);
            store.setAddon(index, addon);
        });
    }

    render() {
        return <div />;
    }
}

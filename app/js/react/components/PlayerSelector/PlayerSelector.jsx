import React from 'react';
import { KillerFactory, SurvivorFactory } from '../../../factories';
import { KillerTooltip, SurvivorTooltip } from '../Tooltips';
import { Types } from '../../../data';

export const PlayerSelector = ({ typeSelected, type }) => {
    const data =
        type === Types.KILLER
            ? KillerFactory.toArray()
            : SurvivorFactory.toArray();

    const players = data.map((player, index) => (
        <div className="player tooltip-activator" key={index}>
            <div className="outline">
                <img
                    className="top"
                    src="images/profile-outline-horizontal.png"
                />
                <img
                    className="bottom"
                    src="images/profile-outline-horizontal.png"
                />
                <img
                    className="left"
                    src="images/profile-outline-vertical.png"
                />
                <img
                    className="right"
                    src="images/profile-outline-vertical.png"
                />
            </div>
            <img className="profile" src={player.image} />
            <img className="background" src="images/Profile_Background.png" />
            {type === Types.KILLER ? (
                <KillerTooltip killer={player} />
            ) : (
                <SurvivorTooltip survivor={player} />
            )}
        </div>
    ));

    return <div className="player-selector">{players}</div>;
};

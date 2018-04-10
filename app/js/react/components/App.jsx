import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Store } from '../Store';
import { TypeSelector } from './TypeSelector';
import PlayerSelector from './PlayerSelector';
import { Intro } from './Intro';
import LoadoutSelector from './LoadoutSelector';

const AppComponent = ({ location }) => {
    const key = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 2000, exit: 1000 };

    return (
        <div className="app">
            <TransitionGroup>
                <CSSTransition
                    key={key}
                    classNames="fade"
                    timeout={timeout}
                    appear
                >
                    <Switch location={location}>
                        <Route
                            path="/"
                            exact
                            component={() => <Intro store={Store} />}
                        />
                        <Route
                            path="/type"
                            component={() => <TypeSelector store={Store} />}
                        />
                        <Route
                            path="/survivors"
                            component={() => <PlayerSelector store={Store} />}
                        />
                        <Route
                            path="/killers"
                            component={() => <PlayerSelector store={Store} />}
                        />
                        <Route
                            path="/loadout"
                            component={() => <LoadoutSelector store={Store} />}
                        />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export const App = withRouter(AppComponent);

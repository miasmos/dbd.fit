import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Store } from '../Store';
import { TypeSelector } from './TypeSelector';
import PlayerSelector from './PlayerSelector';
import { Intro } from './Intro';
import { Initializer } from './Initializer';
import LoadoutSelector from './LoadoutSelector';

const AppComponent = ({ location, history }) => {
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
                            path="/build/type"
                            component={() => <TypeSelector store={Store} />}
                        />
                        <Route
                            path="/build/survivors"
                            component={() => <PlayerSelector store={Store} />}
                        />
                        <Route
                            path="/build/killers"
                            component={() => <PlayerSelector store={Store} />}
                        />
                        <Route
                            path="/build/loadout"
                            component={() => <LoadoutSelector store={Store} />}
                        />
                        <Route
                            path="/:hash"
                            component={({ match }) => (
                                <Initializer
                                    store={Store}
                                    match={match}
                                    history={history}
                                />
                            )}
                        />
                        <Route component={() => <Intro store={Store} />} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export const App = withRouter(AppComponent);

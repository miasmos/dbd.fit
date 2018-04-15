import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Store } from '../Store';
import { TypeSelector } from './TypeSelector';
import PlayerSelector from './PlayerSelector';
import { Intro } from './Intro';
import { Footer } from './Footer';
import LoadoutSelector from './LoadoutSelector';
import { Loading } from './Loading';
import { observer } from 'mobx-react';

@observer
class AppComponent extends React.Component {
    render() {
        const { location, history, store } = this.props;
        const key = location.pathname.replace(/\//, '') || '/';
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
                                component={() => (
                                    <PlayerSelector store={Store} />
                                )}
                            />
                            <Route
                                path="/build/killers"
                                component={() => (
                                    <PlayerSelector store={Store} />
                                )}
                            />
                            <Route
                                path="/build/loadout"
                                component={({ match }) => (
                                    <LoadoutSelector
                                        store={Store}
                                        match={match}
                                        history={history}
                                    />
                                )}
                            />
                            <Route
                                path="/:hash"
                                component={({ match }) => (
                                    <LoadoutSelector
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
                <Footer />
            </div>
        );
    }
}

export const App = withRouter(AppComponent);

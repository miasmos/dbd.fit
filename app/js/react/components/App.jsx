import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TypeSelector } from './TypeSelector';
import { KillerSelector, SurvivorSelector } from './PlayerSelector';
import { Intro } from './Intro';

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
                        <Route path="/" exact component={Intro} />
                        <Route path="/type" component={TypeSelector} />
                        <Route path="/killer" component={KillerSelector} />
                        <Route path="/survivor" component={SurvivorSelector} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export const App = withRouter(AppComponent);

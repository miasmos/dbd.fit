import React from 'react';
import { Config } from '../../services';
var ReactRecaptcha = require('react-recaptcha');
import { Observer } from '../../Observer';

let instance;

export class Recaptcha extends React.Component {
    componentWillMount() {
        this.props.store.captchaExecute = this.execute;
        this.props.store.captchaReset = this.reset;
    }

    render() {
        return (
            <ReactRecaptcha
                ref={e => (instance = e)}
                sitekey={Config.recaptcha}
                size="invisible"
                render="explicit"
                theme="dark"
                verifyCallback={this.props.verify}
                onloadCallback={this.load.bind(this)}
            />
        );
    }

    execute() {
        instance.execute();
    }

    reset() {
        instance.reset();
    }

    load() {}
}

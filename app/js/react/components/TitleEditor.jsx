import React from 'react';
import { observer } from 'mobx-react';
import { i18n } from '../../i18n';
import { Config } from '../../services';

@observer
export class TitleEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false
        };
        this.shouldFocus = false;
    }

    componentDidUpdate() {
        if (this.shouldFocus) {
            this.shouldFocus = false;
            this.refs.input.focus();
        }
    }

    render() {
        const { store } = this.props;

        return (
            <div
                className={`title-editor ${
                    this.state.editing ? 'editing' : ''
                }`}
            >
                <div className="title-editor-inner">
                    <h2 onClick={this.onEdit.bind(this)}>{store.title}</h2>
                    <input
                        type="text"
                        value={store.title}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        ref="input"
                        onChange={this.onChange.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                        onKeyPress={this.onKeyPress.bind(this)}
                    />
                    {store.editing && (
                        <img
                            className="edit"
                            src={`${Config.basePath}images/icon-pencil.png`}
                            onClick={this.onEdit.bind(this)}
                        />
                    )}
                    <img
                        className="confirm"
                        src={`${Config.basePath}images/icon-checkmark.png`}
                        onClick={this.onConfirm.bind(this)}
                    />
                </div>
            </div>
        );
    }

    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.onConfirm();
        }
    }

    onFocus(event) {
        const temp = event.target.value;
        event.target.value = '';
        event.target.value = temp;
    }

    onChange(event) {
        const { store } = this.props;

        if (event.target.value.length <= 30) {
            store.setTitle(event.target.value);
        }
    }

    onEdit() {
        if (!this.props.store.editing) {
            return;
        }

        this.shouldFocus = true;
        this.setState({
            editing: true
        });
    }

    onConfirm() {
        const { store } = this.props;

        if (store.titleIsValid()) {
            this.setState({
                editing: false
            });
        }
    }
}

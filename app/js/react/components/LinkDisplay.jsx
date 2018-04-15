import React from 'react';
import { Config } from '../../services';
import { i18n } from '../../i18n';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { observer } from 'mobx-react';

@observer
export class LinkDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            mouseIsDown: false
        };
    }

    render() {
        const { uri } = this.props;
        return (
            <div
                className={`link ${this.state.mouseIsDown ? 'down' : ''}`}
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this)}
            >
                <CopyToClipboard
                    text={`${Config.protocol}://${Config.host}/${uri}`}
                >
                    <div className="link-inner">
                        <span>{`${Config.host}/${uri}`}</span>

                        <img
                            className="icon-copy"
                            src={`${Config.basePath}images/icon-copy.png`}
                        />
                    </div>
                </CopyToClipboard>
            </div>
        );
    }

    onMouseDown() {
        this.setState({ mouseIsDown: true });
    }

    onMouseUp() {
        this.setState({ mouseIsDown: false });
    }
}

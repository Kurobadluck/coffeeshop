import React, { Component } from 'react';
class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <h3>
                <span className="d-flex justify-content-center">
                    {message}
                </span>
            </h3>
        );
    }
}

export default Message;

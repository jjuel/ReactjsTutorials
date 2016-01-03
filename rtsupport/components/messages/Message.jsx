import React, {Component} from 'react';

class Message extends Component {
    render() {
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD')

        return (
            <li className='message'>
                <div className='author'>
                    <strong>{message.author}</strong>
                    <i className='timestamp'>{createdAt}</i>
                </div>
                <div className='body'>{message.body}</div>
            </li>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}

export default Message

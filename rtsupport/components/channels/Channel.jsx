import React, {Component} from 'React';

class Channel extends Component {
    onClick(e) {
        e.preventDefault();
        const {channel, setChannel} = this.props;
        setChannel(channel);
    }

    render() {
        const {channel} = this.props;

        return (
            <li>
                <a onClick={this.onClick.bind(this)}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes {
    channel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default Channel

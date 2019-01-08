import React, { Component } from 'react';

export class Alarm extends Component {
    state = {
        enabled: false,
        times: []
    }
    disable = () => {
        this.setState({
            enabled: false
        });
    }

    enable = () => {
        this.setState({
            enabled: true
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {
            enabled
        } = this.state;
        const {
            hour,
            minute,
            description
        } = this.state;
        const values = {
            hour,
            minute,
            description
        };
        if (enabled === true) {
            return(
                <div id="alarm">
                    <p class="time">{`${hour}:${minute}`}</p>
                    <p class="description">{`${description}`}</p>
                </div>
            );
        } else {
            return(
                <p>Currently no alarms are enabled</p>
            );
        }
    }
}

export default Alarm;
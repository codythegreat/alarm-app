import React, { Component } from 'react';

export class Time extends Component {
    state = {
        curTime: null
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime: new Date().toTimeString().substring(0, 8)
            });
        }, 1000);
    }

    render() {
        return(
            <p>{this.state.curTime}</p>
        )
    }
}

export default Time;  
import React, { Component } from 'react';

export class Time extends Component {

    render() {
        const {values: {curTime}} = this.props;
        console.log(this.state);
        return(
            <p>{curTime}</p>
        )
    }
}

export default Time;  
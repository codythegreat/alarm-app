import React, { Component } from 'react';

export class Alarm extends Component {

    render() {
        const {values: {enabled, curTime, alarms}} = this.props;
        console.log(alarms);
        if (enabled === true) {
            return(
                <div id="alarm">
                    <p className="time">{`${alarms[0].time}`}</p>
                    <p className="description">{`${alarms[0].desc}`}</p>
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
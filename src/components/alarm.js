import React, { Component } from 'react';
import { ListItemText, List } from '@material-ui/core';

export class Alarm extends Component {

    render() {
        const {values: {enabled, alarms}} = this.props;
        console.log(alarms);
        if (enabled === true) {
            return(
                <div id="alarm">
                    <List>{alarms.map((i) => {return <ListItemText className="alarm-li-item" >{`${i.time} - ${i.desc}`}</ListItemText>;})}</List>
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
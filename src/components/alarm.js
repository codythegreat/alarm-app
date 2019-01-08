import React, { Component } from 'react';

export class Alarm extends Component {
    state = {
        enabled: false,
        times: [],
        desc: [],
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

    handleClick = () => {
      const {
        times, desc
      } = this.state;
      times.push(document.getElementsByClassName('input')[0].value);
      desc.push(document.getElementsByClassName('input')[1].value);
      this.setState({
        enabled: true,
        times: times,
        desc: desc
      });
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {
            enabled,
            times,
            desc
        } = this.state;
        const values = {
            enabled,
            times,
            desc,
        };
        if (enabled == true) {
            return(
                <div id="alarm">
                    <p class="time">{`${times}`}</p>
                    <p class="description">{`${desc}`}</p>
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
import React, { Component } from 'react';
import './App.css';
import Alarm from './components/alarm';
import AlarmGen from './components/alarmgen';
import Time from './components/time';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';


class App extends Component {
  state = {
    enabled: false,
    curTime: null,
    alarms: [],
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime: new Date().toTimeString().substring(0, 8)
      });
    }, 1000);
  }

  addAlarm = (timeInput, descInput) => {
    let curAlarms = this.state.alarms;
    curAlarms.push({
      time: timeInput,
      desc: descInput,
    })
    this.setState({
      enabled: true,
      alarms: curAlarms,
    })
    setInterval( () => {
      if (timeInput === this.state.curTime) {
        alert(descInput);
        let removeAlarm = this.state.alarms;
        for (let i in removeAlarm) {
          if (removeAlarm[i].time === timeInput && removeAlarm[i].desc === descInput) {
            delete removeAlarm[i];
          }
        }

      }
    }, 1000);
  }

  render() {
    const { enabled } = this.state;
    const { curTime } = this.state;
    const { alarms } = this.state;
    const values = { enabled, curTime, alarms };
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5" color="textSecondary">
              Alarmy
            </Typography>
          </Toolbar>
        </AppBar>
        <div id="top-time">
          <Time
          values = { values }
          addAlarm = { this.addAlarm } 
          />
        </div>
        <AlarmGen 
        addAlarm = {this.addAlarm}/>
        <div id="active-alarms">
          <header><b>Active Alarms</b></header>
          <Alarm 
          values = { values }
           />
        </div>
      </div>
    );
  }
}

export default App;
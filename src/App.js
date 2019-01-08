import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alarm from './components/alarm';
import Time from './components/time';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar, TextField, Button } from '@material-ui/core';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5" color="#53d">
              Alarmy
            </Typography>
          </Toolbar>
        </AppBar>
        <div id="top-time">
          <Time />
        </div>
        <div id="build-alarm">
          <header>
            <b>Create Alarm</b>
          </header>
          <TextField className="input" label="time" defaultValue="12:00:00"></TextField>
          <TextField className="input" label="description" defaultValue="Go To Class"></TextField>
          <Button id="create-alarm">Add</Button>
        </div>
        <div id="active-alarms">
          <header><b>Active Alarms</b></header>
          <Alarm />
        </div>

      </div>
    );
  }
}

export default App;
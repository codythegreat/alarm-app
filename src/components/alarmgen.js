import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export class AlarmGen extends Component {
    state = {
        time: null,
        desc: null,
    }

    generateAlarm = () => {
        this.props.addAlarm(this.state.time, this.state.desc);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const handleChange = this.handleChange;
        const generateAlarm = this.generateAlarm;
        console.log(this.state);
        return(
        <div id="build-alarm">
          <header>
            <b>Create Alarm</b>
          </header>
          <TextField 
          name="time" 
          className="input" 
          label="time" 
          defaultValue="12:00:00" 
          onChange={handleChange}
          >
          </TextField>
          <TextField 
          name="desc" 
          className="input" 
          label="description" 
          defaultValue="Go To Class"
          onChange={handleChange}
          >
          </TextField>
          <div id="button-container">
            <Button 
            variant="contained" 
            id="create-alarm" 
            onClick={generateAlarm}
            >
              Add
            </Button>
          </div>
        </div>
        )
    }
}

export default AlarmGen;
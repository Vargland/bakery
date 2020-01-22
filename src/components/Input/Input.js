import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Input.scss'

class Input extends React.Component {

  renderInput() {
    return(
      <div className="input_container">
        <TextField className="input_name" label="Nombre" variant="outlined"></TextField>
        <TextField variant="outlined"></TextField>
        <TextField variant="outlined"></TextField>
        <TextField variant="outlined"></TextField>
      </div>
    )
  }

  render() {
    return this.renderInput()
  }
}

export default Input;

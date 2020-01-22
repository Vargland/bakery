import React from 'react'
import Grid from '@material-ui/core/Grid';
import './Materials.scss'
import Input from '../Input/Input'

class Materials extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 'materials',
      nextPage: ''
    }
  }

  materialComponent() {
    return (
      <div className='material_container'>
        <Grid item xs={12}>
         <Input></Input>
        </Grid>
      </div>
    )
  }

  render() {
    return this.materialComponent()
  }
}

export default Materials;

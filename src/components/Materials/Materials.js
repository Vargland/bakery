import React from 'react'
import Grid from '@material-ui/core/Grid';
import './Materials.scss'
import MaterialInput from '../MaterialInput/MaterialInput'

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
        <div className='material_title'>
          <i> Agregar Ingrediente </i>
        </div>
        <Grid className="material_grid" item xs={12}>
         <MaterialInput></MaterialInput>
        </Grid>
      </div>
    )
  }

  render() {
    return this.materialComponent()
  }
}

export default Materials;

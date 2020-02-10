import Grid from '@material-ui/core/Grid'
import MaterialInput from '../MaterialInput/MaterialInput'
import MaterialList from '../MaterialList/MaterialList'
import React from 'react'

import './Materials.scss'

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
      <div className='material__container'>
        <div className='material__grid_container'>
          <div className='material__grid_title'>
            <i> Agregar Ingrediente </i>
          </div>
          <Grid className="material__grid" item xs={12}>
          <MaterialInput />
          </Grid>
        </div>
        <div>
          <MaterialList />
        </div>
      </div>
    )
  }

  render() {
    return this.materialComponent()
  }
}

export default Materials

import { LABEL } from '../../constants/constants'
import { tableIcons }  from './tableIcons'

import MaterialTable from 'material-table'
import React from 'react'

class MaterialList extends React.Component {
  constructor(props) {
    super(props)
    this.getMaterials.bind(this)

    this.state = {
      columns: [
        { title: 'Nombre', field: 'name' },
        { title: 'Marca', field: 'brand' },
        { title: 'Cantidad compra', field: 'packageQuantity', type: 'numeric'  },
        { title: 'Unidad compra', field: 'packageUnit' },
        { title: 'Precio', field: 'price'},
        
        { title: 'Cantidad minima', field: 'minimalQuantity', type: 'numeric'  },
        { title: 'Unidad minima', field: 'minimalUnit' },
        { title: 'Precio minimo', field: 'minimalPrice', type: 'numeric'  },
        
      ],
      data: [
        {
          name: 'Harina',
          brand: 'Chacabuco',
          packageQuantity: 1000,
          packageUnit: 'Gr',
          price: 100,
          minimalQuantity: 10,
          minimalUnit: 'Gr',
          minimalPrice: 10,
        },
        {
          name: 'Chocolate',
          brand: 'Gatito',
          packageQuantity: 20,
          packageUnit: 'Unidad',
          price: 10,
          minimalQuantity: 1,
          minimalUnit: 'Unidad',
          minimalPrice: 150,
        },
      ],
    }
  }

  materialListComponent() {
    return (
      <>
        <MaterialTable
          title = {LABEL.GRID.TITLE}
          columns={this.state.columns}
          data={this.state.data}
          
          icons={tableIcons}
          options={{
            actionsColumnIndex: -1,
            search: true,
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      </>
    )
  }

  getMaterials() {


  }

  render() {
    return this.materialListComponent()
  }
}

export default MaterialList
import React from 'react';
import { InputAdornment, MenuItem, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { submitMaterials } from '../../redux/actions/materialInput';
import { withRouter } from 'react-router-dom';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import './MaterialInput.scss'


class MaterialInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      brand: '',
      minimalUnit: '',
      minimalQuantity: '',
      name: '',
      packageQuantity: '',
      price: '',
      packageUnit:'', 
    };
  }

  renderInput() {
    return(
      <div>
        <form className="input__container">
          <div className="input__package">
            <TextField
              className="input__package_name"
              label="Nombre"
              name="name"
              onChange={this.handlerInputChange.bind(this)}
              variant="outlined"/>
            <TextField
              className="input__package_brand"
              label="Marca"
              name="brand"
              onChange={this.handlerInputChange.bind(this)}
              variant="outlined"/>
            <TextField
              className="input__package_quantity"
              label="Cantidad"
              name="packageQuantity"
              onChange={this.handlerInputChange.bind(this)}
              type="number"
              variant="outlined"/>
            <TextField
              className="input__package_unit"
              label="Unidad"
              name="packageUnit"
              onChange={this.handlerInputChange.bind(this)}
              value={this.state.packageUnit}
              variant="outlined"
              select>
                {this.getUnits().package.map(unit => (
                  <MenuItem
                    key={unit.value}
                    value={unit.value}
                    name={unit.value}>
                    {unit.label}
                  </MenuItem>
                ))}
            </TextField> 
            <TextField
              className="input__package_price"
              label="Precio"
              name="price"
              onChange={this.handlerInputChange.bind(this)}
              type="number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyTwoToneIcon fontSize="small" color="primary"/>
                  </InputAdornment>
                ),
              }}/>
          </div>
          <div className="input__minimal">
            <TextField
              className="input__minimal_quantity"
              label="Cantidad"
              name="minimalQuantity"
              onChange={this.handlerInputChange.bind(this)}
              type="number"
              variant="outlined"/>
            <TextField
              className="input__minimal_unit"
              label="Unidad"
              name="minimalUnit"
              onChange={this.handlerInputChange.bind(this)}
              value={this.state.minimalUnit}
              variant="outlined"
              select>
                {this.getUnits().minimal.map(unit => (
                  <MenuItem 
                    key={unit.value}
                    value={unit.value}
                    name={unit.value}>
                    {unit.label}
                  </MenuItem>
                ))}
            </TextField> 
          </div>
          <div className="input__add-button">
            <AddBoxOutlinedIcon type="Submit" value="Submit" onClick={this.handlerSubmit.bind(this)}/>
          </div>
        </form>
      </div>
    )
  }

  getUnits() {
    const units = {
      package: [
        {
          value: 'kilos',
          label: 'Kg',
        },
        {
          value: 'grams',
          label: 'Gramos',
        },
        {
          value: 'liters',
          label: 'Litros',
        },
        {
          value: 'unit',
          label: 'Unidad/es',
        }
      ],
      minimal: [
        {
          value: 'spoon',
          label: 'Cucharadita',
        },
        {
          value: 'grams',
          label: 'Gramos',
        },
        {
          value: 'liters',
          label: 'Litros',
        },
        {
          value: 'unit',
          label: 'Unidad/es',
        }
      ]
    }

    return units;
  }

  handlerInputChange(event) {
    event.preventDefault()

    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  handlerSubmit() {
    submitMaterials(this.state)
  }


  render() {
    return this.renderInput()
  }
}

const mapDispatchToProps = dispatch => ({
  materials: (material) => dispatch(submitMaterials(material)),
})

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MaterialInput))

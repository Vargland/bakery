import React from 'react';
import { InputAdornment, MenuItem, TextField } from '@material-ui/core';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';

import './MaterialInput.scss'


class MaterialInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      minimal: '',
      package: ''
    };
  }

  renderInput() {
    return(
      <div className="input__container">
        <div className="input__package">
          <TextField className="input__package_name" label="Nombre" variant="outlined"/>
          <TextField className="input__package_brand" label="Marca" variant="outlined"/>
          <TextField className="input__package_quantity" label="Cantidad" variant="outlined" />
          <TextField className="input__package_unit" label="Unidad" variant="outlined"
            name="package"
            value={this.state.package}
            onChange={this.handleChange.bind(this)}
            select>
              {this.getUnits().package.map( unit => (
                <MenuItem 
                  key={unit.value}
                  value={unit.value}
                  name={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
          </TextField> 
          <TextField className="input__package_price" label="Precio" variant="outlined"
            type="number" 
            id="standard-select-currency"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyTwoToneIcon fontSize="small" color="primary"/>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="input__minimal">
          <TextField className="input__minimal_quantity" label="Cantidad" variant="outlined" />
          <TextField className="input__minimal_unit" label="Unidad" variant="outlined"
            name="minimal"
            value={this.state.minimal}
            onChange={this.handleChange.bind(this)}
            select>
              {this.getUnits().minimal.map( unit => (
                <MenuItem 
                  key={unit.value}
                  value={unit.value}
                  name={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
          </TextField> 
        </div>
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

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  };

  render() {
    return this.renderInput()
  }
}

export default MaterialInput;

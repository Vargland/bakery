const initialState = {
  brand: '',
  minimalUnit: '',
  minimalQuantity: '',
  name: '',
  packageQuantity: '',
  price: '',
  packageUnit:'', 
};

export default function(state = initialState, action) {
  const material = action.payload;

  switch (action.type) {
    case 'SUBMIT_MATERIALS': {
      return {
        ...state,
        brand: material.brand,
        minimalUnit: material.minimalUnit,
        minimalQuantity: material.minimalQuantity,
        name: material.name,
        packageQuantity: material.packageQuantity,
        price: material.price,
        packageUnit: material.packageUnit, 
      };
    }
    default:
      return state;
  }
}

const initialState = {
  materials: []
};
const materials = []

export default function(state = initialState, action) {
  const material = action.payload;

  switch (action.type) {
    case 'FETCH_MATERIAL': {

    }
    case 'SUBMIT_MATERIAL': {
      materials.push(material)

      return {
        ...state,
        materials
      }
    }
    default:
      return state;
  }
}
/** 
  brand: material.brand,
  minimalUnit: material.minimalUnit,
  minimalQuantity: material.minimalQuantity,
  name: material.name,
  packageQuantity: material.packageQuantity,
  price: material.price,
  packageUnit: material.packageUnit, 
*/
export const submitMaterials = (material) => dispatch => {
  dispatch({
    type: 'SUBMIT_MATERIALS',
    payload: material,
  })
}

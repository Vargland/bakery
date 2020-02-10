export const submitMaterial = (material) => dispatch => {
  dispatch({
    type: 'SUBMIT_MATERIAL',
    payload: material,
  })
}

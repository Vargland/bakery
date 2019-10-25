export const nextPage = (page) => dispatch => {
  dispatch({
    type: 'NEXT_PAGE',
    payload: page,
  })
}

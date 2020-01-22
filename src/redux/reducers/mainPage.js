const initialState = {
  current_page: '/',
  next_page: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEXT_PAGE': {
      return {
        ...state,
        next_page: action.payload,
      };
    }
    default:
      return state;
  }
}

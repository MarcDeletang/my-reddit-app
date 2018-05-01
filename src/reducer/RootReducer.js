let initialValue = {
  accessToken: '',
  subRList: [],
  selectedSub: null,
  posts: []
};

const RootReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_ATOKEN':
      return Object.assign({}, state, {
        accessToken: action.value
      });
    case 'ADD_SUBRLIST':
      return Object.assign({}, state, {
        subRList: action.data,
        selectedSub: action.data[0]
      });
    case 'UPDATE_POST':
      return Object.assign({}, state, {
        posts: action.data
      });
    case 'SELECT_SUB':
      return Object.assign({}, state, {
        selectedSub: action.data
      });
    default:
      return state;
  }
};

export default RootReducer;
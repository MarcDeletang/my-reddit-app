
let initialValue = {
  accessToken: '',
  subRList: [],
  selectedSub: null,
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
    default:
      return state;
  }
};

export default RootReducer;
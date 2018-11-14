const initialState = {
  authirized: false
}

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    console.log(action);
  }
}

export default reducer;

import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  console.log('Лог action в reducer', action);
  return state;
};

const store = createStore(reducer);

export default store;

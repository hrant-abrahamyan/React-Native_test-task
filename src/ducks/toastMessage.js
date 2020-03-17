export const ADD_TOAST_MESSAGE = 'ADD_TOAST_MESSAGE';
export const REMOVE_TOAST_MESSAGE = 'REMOVE_TOAST_MESSAGE';

export const removeMessage = () => ({
  type: REMOVE_TOAST_MESSAGE,
});

export const addMessage = text => ({
  type: ADD_TOAST_MESSAGE,
  payload: {
    text,
    visible: true,
  },
});

const initialState = {
  text: '',
  visible: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TOAST_MESSAGE:
      return payload;
    case REMOVE_TOAST_MESSAGE:
      return {
        text: '',
        visible: false,
      };
    default:
      return state;
  }
};

const initialState = {
  name: '',
  phone: '',
  email: ''
};

export const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_FORM_UPDATE':
      return {
          ...state,
          [action.payload.prop]: action.payload.value
      };
    default:
      return state;
  }
};

export const contactFormUpdate = ({ prop, value }) => ({
  type: 'CONTACT_FORM_UPDATE',
  payload: {
    prop,
    value
  }
});

export const contactAdd = contact => ({
  type: 'CONTACT_ADD',
  contact
});
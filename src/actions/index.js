import uuid from 'uuid';

export const contactFormUpdate = ({ prop, value }) => ({
  type: 'CONTACT_FORM_UPDATE',
  payload: {
    prop,
    value
  }
});

export const contactAdd = contact => ({
  type: 'CONTACT_ADD',
  contact: {
    id: uuid.v4(),
    ...contact
  }
});

export const contactDelete = index => ({
  type: 'CONTACT_DELETE',
  index
});

export const contactEdit = contact => ({
  type: 'CONTACT_EDIT',
  contact
});

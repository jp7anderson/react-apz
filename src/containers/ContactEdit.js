import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { contactFormUpdate, contactEdit } from '../actions';
import ContactForm from '../components/ContactForm';

class ContactEdit extends Component {
  componentWillMount() {
    const { contactId } = this.props.match.params;

    const contact = this.props.contactList.find(c => c.id === contactId);

    Object.keys(contact).forEach(key =>
      this.props.onChange({ prop: key, value: contact[key] })
    );
  }

  handleSubmit() {
    const { id, name, phone, email } = this.props;

    this.props.onSubmit({ id, name, phone, email });
  }

  render() {
    return (
      <form className="form-horizontal">
        <ContactForm {...this.props} />
        <fieldset className="form-group">
          <Link to="/" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</Link>
        </fieldset>
      </form>
    )
  }
}

const mapStateToProps = state => ({
    ...state.contactForm,
    contactList: state.contacts.contactList
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ prop, value }) => dispatch(contactFormUpdate({ prop, value })),
  onSubmit: contact => dispatch(contactEdit(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactEdit));

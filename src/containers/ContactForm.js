import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { contactFormUpdate, contactAdd } from '../actions';
import { Link } from 'react-router-dom';

class ContactForm extends Component {
  handleChange(event, prop) {
    const { value } = event.target;
    this.props.onChange({ prop, value });
  }

  handleSubmit() {
    const { name, phone, email } = this.props;

    this.props.onSubmit({ name, phone, email });
  }

  render() {
    return (
        <form className="form-horizontal">
          <fieldset className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" value={this.props.name} onChange={event => this.handleChange(event, 'name')} placeholder="e.g. John Doe"  />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" className="form-control" value={this.props.phone} onChange={event => this.handleChange(event, 'phone')} placeholder="(111) 111-111"  />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" className="form-control" value={this.props.email} onChange={event => this.handleChange(event, 'email')} placeholder="john.doe@example.com"  />
          </fieldset>
          <fieldset className="form-group">
            <Link to="/" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</Link>
          </fieldset>
          <fieldset className="form-group">
            <button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button>
          </fieldset>
        </form>
    );
  }
}

const mapStateToProps = state => ({
    ...state.contactForm
});

const mapDispatchToProps = dispatch => ({
  onChange: values => dispatch(contactFormUpdate(values)),
  onSubmit: contact => dispatch(contactAdd(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactForm));

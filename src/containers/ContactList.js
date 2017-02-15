import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to="/new">
          Create new Contact
        </Link>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contactList.map(({ name, phone, email }) => (
                  <tr>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

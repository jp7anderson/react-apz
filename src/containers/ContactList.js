import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { contactDelete, contactFetch } from '../actions';
import Button from '../components/Button';

class ContactList extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

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
              <th colSpan={2}>&nbsp;</th>
            </tr>
          </thead>
            <tbody>
            {
              this.props.contactList.map(({ id, name, phone, email }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>
                    <Link to={`/edit/${id}`} className="btn btn-primary">Edit</Link>
                  </td>
                  <td>
                    <Button
                      buttonType="btn-danger"
                      onClick={() => this.props.onClickDelete(id)}
                    >
                      Delete
                    </Button>
                  </td>
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

const mapDispatchToProps = dispatch => ({
  onClickDelete: index => dispatch(contactDelete(index)),
  onLoad: () => dispatch(contactFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactList));

import React, { Component } from "react";

class EditUserForm extends Component {
  state = {
    user: this.props.currentUser,
  };
  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };
  handleCancel = (e) => {};
  componentDidMount() {
    this.setState({
      user: this.props.currentUser,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.id);
    this.props.updateUser(this.state.id, this.state.user);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.user.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={this.state.user.username}
            onChange={this.handleChange}
          />
        </div>
        <button>Update User</button>
        <button onClick={this.handleCancel}>Cancel </button>
      </form>
    );
  }
}

export default EditUserForm;

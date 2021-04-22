import React, { Component } from "react";

class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: null, name: "", username: "" },
    };
  }

  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.user.name || !this.state.user.username) return;
    this.props.addUser(this.state.user);
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
        <div>
          <button>Add New User</button>
        </div>
      </form>
    );
  }
}

export default AddUserForm;

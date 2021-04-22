import React, { Component } from "react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import UserTable from "./UserTable";

class Main extends Component {
  state = {
    users: [
      { id: 1, name: "shan", username: "shandue123" },
      { id: 2, name: "Mukesh", username: "mukesh123" },
      { id: 3, name: "Manish", username: "manish123" },
    ],
    currentUser: { id: null, name: "", username: "" },
    editing: true,
  };
  addUser = (user) => {
    user.id = this.state.users.length + 1;
    console.log(user.id);
    this.setState({
      users: [...this.state.users, user],
    });
    console.log(this.state.users);
  };
  updateUser = (id, updatedUser) => {
    this.setState({
      users: [
        this.state.users.map((user) => (user.id === id ? updatedUser : user)),
        (this.state.editing: false),
      ],
    });
  };
  deleteUser = (id) => {
    console.log(id);
    let newUser = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: newUser,
      editing: false,
    });
  };
  editRow=(user)=>{
     currentUser:{ id: user.id, name: user.name, username: user.username },
     editing: true,
  }
  render() {
    return (
      <React.Fragment>
        <h2>CRUD App with Class Components </h2>
        <div>
          {this.state.editing ? (
            <React.Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={this.state.currentUser}
                editing={this.state.editing}
                updateUser={this.updateUser}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={this.addUser} />
            </React.Fragment>
          )}
        </div>
        <div>
          <h2>View Users</h2>
          <UserTable users={this.state.users} deleteUser={this.deleteUser} editRow={this.editRow} />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

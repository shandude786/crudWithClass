import React, { Component } from "react";

class UserTable extends Component {
  render() {
    // const { users } = this.props.users;
    // console.log(this.props.users);
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>UserName</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.props.users ? (
              this.props.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => this.props.deleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default UserTable;

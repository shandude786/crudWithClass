import React, { Component } from "react";

class Display extends Component {
  render() {
    console.log(this.props.datas[0].firstName);
    return (
      <div>
        <h1>Display Data </h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>{this.props.firstName}</td>
              <td>{this.props.lastName}</td>
            </tr> */}

            {this.props.datas.map((data, i) => {
              console.log(i);
              return (
                <tr key={i}>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>
                    <button onClick={() => this.props.handleEdit(i)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.props.handleRemove(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Display;

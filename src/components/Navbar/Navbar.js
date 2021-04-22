import React, { Component } from "react";
import Display from "../DisplayData/Display";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      display: false,
      datas: [],
    };
  }
  handleEdit = (i) => {};
  handleRemove = (i) => {
    console.log(i);
    let datas = this.state.datas;
    this.setState({ datas: datas });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let datas = this.state.datas;
    let data = {
      firstName,
      lastName,
    };
    datas.push(data);

    this.setState({ display: true, datas: datas });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 mx-auto form-div">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 mx-auto form-div">
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 mx-auto form-div">
                <button type="submit" className="btn btn-primary">
                  Add New User
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mx-auto form-div">
              {this.state.display ? (
                <Display
                  datas={this.state.datas}
                  handleEdit={this.handleEdit}
                  handleRemove={this.handleRemove}
                />
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;

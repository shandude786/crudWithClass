// import React, { Component } from "react";

// class Form extends Component {
//   state = {
//     user: { name: "", username: "" },
//     edit: false,
//     users: [],
//   };
//   handleChange = (e) => {
//     this.setState({
//       user: { ...this.state.user, [e.target.name]: e.target.value },
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.setState({ users: { ...this.state.user }, edit: true });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button>Submit</button>
//         </form>
//         <div>
//           {this.state.edit ? (
//             <React.Fragment>
//               <div>
//                 {this.state.users.map((user) => {
//                   return (
//                     <div>
//                       <h1>{user.name}</h1>
//                       <h1>{user.username}</h1>
//                     </div>
//                   );
//                 })}
//               </div>
//             </React.Fragment>
//           ) : null}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// // export default Form;

// users: [
//   { id: 1, name: "shan", username: "shandue123" },
//   { id: 2, name: "Mukesh", username: "mukesh123" },
//   { id: 3, name: "Manish", username: "manish123" },
// ],
// //   users.filter((user) => user.id !== id);
// console.log(users.filter((user) => user.id !== id))
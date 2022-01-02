// import React, { useContext, useState } from "react";
// import { LoginContext } from "../context/loginContext";

// // import "./login.scss";

// function Signin() {
//   const { loggedIn, loginFunction, signupFunction } = useContext(LoginContext);
//   // const login = useContext(LoginContext);
//   // const { loggedIn, loginFunction, signupFunction } = login;

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState([]);
//   const [switcher, setSwitcher] = useState(false);
//   console.log("username>>>", username);
//   console.log("password>>>", password);
//   console.log("role>>>", role);

//   // function handleChange(e) {
//   //   console.log("fffffffffffffffffff", e.target.username);
//   //   console.log("username", username);
//   //   console.log("password", password);
//   //   console.log("role", role);

//   //   setUsername(e.target.value);
//   //   setPassword(e.target.value);
//   //   setRole(e.target.value);
//   // }
//   function handleSubmit(e) {
//     e.preventDefault();
//     loginFunction(username, password);
//   }
//   function handleSubmitSignup(e) {
//     e.preventDefault();
//     signupFunction(username, password, role);
//   }
//   function switchBtn(e) {
//     const switcherChange = e ? true : false;
//     setSwitcher(switcherChange);
//   }

//   return (
//     <>
//       {!loggedIn && (
//         <div className="login-page">
//           <div className="form">
//             {switcher && (
//               <form onSubmit={handleSubmitSignup} className="login-form">
//                 <input
//                   type="text"
//                   onChange={(e) => setUsername(e.target.value)}
//                   name="username"
//                   placeholder="username"
//                 />
//                 <input
//                   type="password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   name="password"
//                   placeholder="password"
//                 />
//                 <label for="role">Choose a role:</label>
//                 <select
//                   onClick={(e) => setRole(e.target.value)}
//                   // style={{ width: "10rem", marginBottom: "14px" }}
//                   name="role"
//                   id="role"
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="teamLeader">Team Leader</option>
//                   <option value="agent">Agent</option>
//                 </select>
//                 <button>Signup</button>
//                 <p className="message">
//                   Already registered?{" "}
//                   <a onClick={() => switchBtn(false)} href="#">
//                     Sign In
//                   </a>
//                 </p>
//               </form>
//             )}
//             {!switcher && (
//               <form className="login-form" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   onChange={(e) => setUsername(e.target.value)}
//                   name="username"
//                   placeholder="username"
//                 />
//                 <input
//                   type="password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   name="password"
//                   placeholder="password"
//                 />
//                 <button>login</button>
//                 <p className="message">
//                   Not registered?{" "}
//                   <a onClick={() => switchBtn(true)} href="#">
//                     Create an account
//                   </a>
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Signin;

// // class Login extends React.Component {
// //   static contextType = LoginContext;
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       username: "",
// //       password: "",
// //       role: [],
// //       switcher: false,
// //     };
// //   }
// //   handleChange = (e) => {
// //     this.setState({ [e.target.name]: e.target.value });
// //   };

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// //     this.context.loginFunction(this.state.username, this.state.password);
// //   };
// //   handleSubmitSignup = (e) => {
// //     e.preventDefault();
// //     this.context.signupFunction(
// //       this.state.username,
// //       this.state.password,
// //       this.state.role
// //     );
// //   };
// //   switchBtn = (e) => {
// //     const switcher = e ? true : false;
// //     this.setState({
// //       switcher: switcher,
// //     });
// //   };
// //   render() {
// //     return (
// //       <>
// //         {!this.context.loggedIn && (
// //           <div className="login-page">
// //             <div className="form">
// //               {this.state.switcher && (
// //                 <form onSubmit={this.handleSubmitSignup} className="login-form">
// //                   <input
// //                     type="text"
// //                     onChange={this.handleChange}
// //                     name="username"
// //                     placeholder="username"
// //                   />
// //                   <input
// //                     type="password"
// //                     onChange={this.handleChange}
// //                     name="password"
// //                     placeholder="password"
// //                   />
// //                   <label for="role">Choose a role:</label>
// //                   <select
// //                     onClick={this.handleChange}
// //                     // style={{ width: "10rem", marginBottom: "14px" }}
// //                     name="role"
// //                     id="role"
// //                   >
// //                     <option value="admin">Admin</option>
// //                     <option value="teamLeader">Team Leader</option>
// //                     <option value="agent">Agent</option>
// //                   </select>
// //                   <button>Signup</button>
// //                   <p className="message">
// //                     Already registered?{" "}
// //                     <a onClick={() => this.switchBtn(false)} href="#">
// //                       Sign In
// //                     </a>
// //                   </p>
// //                 </form>
// //               )}
// //               {!this.state.switcher && (
// //                 <form className="login-form" onSubmit={this.handleSubmit}>
// //                   <input
// //                     type="text"
// //                     onChange={this.handleChange}
// //                     name="username"
// //                     placeholder="username"
// //                   />
// //                   <input
// //                     type="password"
// //                     onChange={this.handleChange}
// //                     name="password"
// //                     placeholder="password"
// //                   />
// //                   <button>login</button>
// //                   <p className="message">
// //                     Not registered?{" "}
// //                     <a onClick={() => this.switchBtn(true)} href="#">
// //                       Create an account
// //                     </a>
// //                   </p>
// //                 </form>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </>
// //     );
// //   }
// // }

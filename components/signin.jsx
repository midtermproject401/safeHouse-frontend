import React, { useContext, useState } from "react";
import { LoginContext } from "../context/loginContext";
import styles from "../styles/Signin.module.css";

// import "./login.scss";

function Signin() {
  const { loggedIn, loginFunction, signupFunction } = useContext(LoginContext);
  // const login = useContext(LoginContext);
  // const { loggedIn, loginFunction, signupFunction } = login;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);
  const [switcher, setSwitcher] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    loginFunction(username, password);
  }
  function handleSubmitSignup(e) {
    e.preventDefault();
    signupFunction(username, password, role);
  }
  function switchBtn(e) {
    const switcherChange = e ? true : false;
    setSwitcher(switcherChange);
  }
  //   className={styles.message}
  return (
    <>
      {!loggedIn && (
        <div className={styles.loginPage}>
          <div className={styles.form}>
            {switcher && (
              <form onSubmit={handleSubmitSignup} className="login-form">
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  placeholder="username"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="password"
                />
                <label htmlFor="role">Choose a role:</label>
                <select
                  onClick={(e) => setRole(e.target.value)}
                  // style={{ width: "10rem", marginBottom: "14px" }}
                  name="role"
                  id="role"
                >
                  {/* <option value="admin">Admin</option> */}
                  <option value=""></option>
                  <option value="owner">Owner</option>
                  <option value="client">Client</option>
                </select>
                <button>Signup</button>
                <p className={styles.message}>
                  Already registered?{" "}
                  <a onClick={() => switchBtn(false)} href="#">
                    Sign In
                  </a>
                </p>
              </form>
            )}
            {!switcher && (
              <form className="login-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  placeholder="username"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="password"
                />
                <button>login</button>
                <p className={styles.message}>
                  Not registered?{" "}
                  <a onClick={() => switchBtn(true)} href="#">
                    Create an account
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;

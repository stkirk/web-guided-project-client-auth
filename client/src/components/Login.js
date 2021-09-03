import React from "react";
import axios from "axios";

class Login extends React.Component {
  // credentials is structured this way because the login endpoint looks like this:
  // const { username, password } = request.body;
  // it is expecting username and password to be keys inside of an object and it destructures those keys.
  //thus if we send over the credentials object containing username and password keys the API login endpoint will be happy
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  // STEP 4: Complete login functionality
  login = (e) => {
    e.preventDefault();
    // hit the login endpoint with username and password (state values for the form) in the request body, check post requirements for the API
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        //happy path: log response to see data structure returned
        //store the token from the response in localStorage with key 'token'
        console.log("Login Endpoint Res: ", res);
        localStorage.setItem("token", res.data.token);
        //after token is stored, redirect to '/protected'
        this.props.history.push("/protected");
      })
      .catch((err) => {
        //sad path: console.log error
        console.log("Login Endpoint Err", err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import "./styles.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      inputType: "password"
    };
  }
  handleInputType = () => {
    const inputType = this.state.inputType === "password" ? "text" : "password";
    this.setState({
      inputType
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <form>
          <div style={styles.formWrapper}>
            <input
              style={styles.inputStyles}
              name="password"
              type={this.state.inputType}
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div
              style={{
                ...styles.inputStyles,
                ...styles.buttonStyles
              }}
              onClick={this.handleInputType}
            >
              {this.state.inputType === "password" ? "Show" : "Hide"}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const styles = {
  formWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyles: {
    outline: "none",
    padding: "15px",
    border: "none",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    fontSize: "15px"
  },
  buttonStyles: {
    borderRight: "1px solid black",
    borderLeft: "none",
    cursor: "pointer"
  }
};

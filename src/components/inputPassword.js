import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  return (
    <div className="App">
      <form>
        <div style={styles.formWrapper}>
          <input
            style={styles.inputStyles}
            type={inputType}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              ...styles.inputStyles,
              ...styles.buttonStyles
            }}
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
          >
            {inputType === "password" ? "Show" : "Hide"}
          </div>
        </div>
      </form>
    </div>
  );
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

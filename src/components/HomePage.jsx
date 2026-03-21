import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (!input.trim()) {
      alert("Please enter your name");
      return;
    }
    navigate(`/room/${input}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Join Video Call</h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Your Name..."
          style={styles.input}
          onKeyDown={(e) => e.key === "Enter" && submitHandler()}
        />

        <button onClick={submitHandler} style={styles.button}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default HomePage;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)"
  },
  card: {
    padding: "40px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#4facfe",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
  }
};
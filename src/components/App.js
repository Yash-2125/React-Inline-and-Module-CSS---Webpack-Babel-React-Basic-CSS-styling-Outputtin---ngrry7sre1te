import React from "react";
import styles from "./appStyles.module.css";

function App() {
  const heading = { fontSize: "50px", color: "red" };
  return (
    <div id="main">
      <h1 className={styles.success}>Success</h1>
      <h1 style={heading}>Error</h1>
    </div>
  );
}

export default App;

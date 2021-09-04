import React from "react";
import { CandidateCard } from "../components/CandidateCard";
import styles from "./App.module.scss";

import logo from "../assets/logo.png";

function App() {
  return (
    <main>
      <img alt="Softvision" src={logo} width={320} />
      <h1 className={styles.title}>Lets get this party started</h1>
    </main>
  );
}

export default App;

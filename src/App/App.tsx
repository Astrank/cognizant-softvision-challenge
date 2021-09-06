import React from "react";
import styles from "./App.module.scss";
import { useCandidates } from "../context/CandidateContext";
import { AccordionMenu } from "../components/AccordionMenu";
import { CandidateProvider } from "../context/CandidateContext";

import logo from "../assets/logo.png";

function App() {
    return (
        <main className={styles.container}>
            <img
                alt="Softvision"
                src={logo}
                width={320}
                className={styles.logo}
            />
            <div className={styles.accordion__container}>
                <CandidateProvider>
                    <AccordionMenu />
                </CandidateProvider>
            </div>
        </main>
    );
}

export default App;

import React from "react";
import { Candidate } from "../types/candidate";
import styles from "./Component.module.scss";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import { useCandidates } from "../context/CandidateContext";

interface CandidateProps {
    candidate: Candidate;
}

export const CandidateCard: React.FC<CandidateProps> = ({ candidate }) => {
    const { ascendCandidate, descendCandidate } = useCandidates();

    return (
        <div className={styles.candidate}>
            <div className={styles.candidate__info}>
                <div className={styles.candidate__name}>{candidate.name}</div>
                <div className={styles.candidate__comments}>
                    {candidate.comments}
                </div>
            </div>
            <div className={styles.candidate__buttons}>
                <button
                    onClick={() => descendCandidate(candidate.id)}
                    className={styles.btn}
                >
                    <ArrowUpIcon />
                </button>
                <button
                    onClick={() => ascendCandidate(candidate.id)}
                    className={styles.btn}
                >
                    <ArrowDownIcon />
                </button>
            </div>
        </div>
    );
};

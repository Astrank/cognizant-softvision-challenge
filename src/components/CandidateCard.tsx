import React from "react";
import styles from "./CandidateCard.module.scss";
import { useCandidates } from "../context/CandidateContext";
import { Candidate } from "../types/candidate";
import { DialogContent } from "./DialogContent";

import { ArrowUpIcon, ArrowDownIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

interface CandidateProps {
    candidate: Candidate;
}

export const CandidateCard: React.FC<CandidateProps> = ({ candidate }) => {
    const { ascendCandidate, descendCandidate, deleteCandidate } = useCandidates();

    return (
        <div className={styles.candidate}>
            <div className={styles.step__buttons}>
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
            <div className={styles.candidate__info}>
                <div className={styles.candidate__name}>{candidate.name}</div>
                <div className={styles.candidate__comments}>
                    {candidate.comments}
                </div>
            </div>
            <div>
                <Dialog.Root>
                    <div className={styles.edit__buttons}>
                        <Dialog.Trigger className={styles.btn}>
                            <Pencil1Icon />
                        </Dialog.Trigger>
                        <button
                            className={styles.btn}
                            onClick={() => deleteCandidate(candidate.id)}
                        >
                            <TrashIcon />
                        </button>
                    </div>
                    <DialogContent
                        title={`Edit ${candidate.name}`}
                        candidate={candidate}
                    />
                </Dialog.Root>
            </div>
        </div>
    );
};

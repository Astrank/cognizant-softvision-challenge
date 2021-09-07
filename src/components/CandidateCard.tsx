import React from "react";
import styles from "./CandidateCard.module.scss";
import { useCandidates } from "../context/CandidateContext";
import { Candidate } from "../types/candidate";
import { DialogContent } from "./DialogContent";

import * as Dialog from "@radix-ui/react-dialog";

interface Props {
    candidate: Candidate;
}

export const CandidateCard: React.FC<Props> = ({ candidate }) => {
    const { ascendCandidate, descendCandidate, deleteCandidate } =
        useCandidates();

    return (
        <div className={styles.candidate}>
            <div className={styles.step__buttons}>
                <button
                    onClick={() => descendCandidate(candidate.id)}
                    className={styles.btn__icon}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => ascendCandidate(candidate.id)}
                    className={styles.btn__icon}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>
            <div className={styles.candidate__info}>
                <div className={styles.candidate__name}>{candidate.name}</div>
                <div className={styles.candidate__comments}>
                    {candidate.comments}
                </div>
            </div>
            <div className={styles.edit__buttons}>
                <Dialog.Root>
                    <div>
                        <Dialog.Trigger className={styles.btn__icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                width={24}
                                height={24}
                                fill="currentColor"
                            >
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Dialog.Trigger>
                        <button
                            className={styles.btn__icon}
                            onClick={() => deleteCandidate(candidate.id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                width={24}
                                height={24}
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
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

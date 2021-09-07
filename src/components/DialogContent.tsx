import React, { useState } from "react";
import styles from "./DialogContent.module.scss";
import { useCandidates } from "../context/CandidateContext";
import { Candidate } from "../types/candidate";

import * as Dialog from "@radix-ui/react-dialog";

interface Props {
    title: string;
    candidate?: Candidate;
}

export const DialogContent: React.FC<Props> = ({ title, candidate }) => {
    const { steps, addCandidate, updateCandidate } = useCandidates();
    const [name, setName] = useState(candidate ? candidate.name : '');
    const [comments, setComments] = useState(candidate ? candidate.comments : '');

    const handleSubmit = () => {
        let newCandidate: Candidate;

        if(candidate) {
            newCandidate = {
                id: candidate.id,
                name: name,
                comments: comments,
                step: candidate.step
            }
            updateCandidate(newCandidate);
        }

        newCandidate = {
            id: Math.random()
                .toString()
                .replace(".", Math.random().toString().replace(".", "")).toString(),
            name: name,
            comments: comments,
            step: steps[0]
        };

        addCandidate(newCandidate);
    }

    return (
        <div>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.form}>
                <Dialog.Title className={styles.form__title}>
                    {title}
                </Dialog.Title>
                <div className={styles.form__group}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className={styles.form__group__name}
                        defaultValue={candidate ? candidate.name : ""}
                        onChange={(i) => setName(i.target.value)}
                    />
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="comments">Comments</label>
                    <input
                        type="text"
                        id="comments"
                        className={styles.form__group__comments}
                        defaultValue={candidate ? candidate.comments : ""}
                        onChange={(i) => setComments(i.target.value)}
                    />
                </div>
                <div className={styles.form__buttons}>
                    <Dialog.Close className={styles.btn__cancel}>
                        Cancel
                    </Dialog.Close>
                    <Dialog.Close
                        className={styles.btn__submit}
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </Dialog.Close>
                </div>
            </Dialog.Content>
        </div>
    );
};

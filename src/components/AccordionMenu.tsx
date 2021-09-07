import React from 'react';
import styles from "./AccordionMenu.module.scss";
import { useCandidates } from "../context/CandidateContext";
import { CandidateCard } from "./CandidateCard";
import { DialogContent } from "./DialogContent";    

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";

export const AccordionMenu: React.FC = ({}) => {
    const { steps, getCandidatesByStep } = useCandidates();

    return (
        <div className={styles.accordion__menu}>
            <Dialog.Root>
                <Dialog.Trigger className={styles.btn}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        height={18}
                        width={18}
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Dialog.Trigger>
                <DialogContent title="New candidate" />
            </Dialog.Root>
            <Accordion.Root
                type="single"
                defaultValue="item-1"
                collapsible
                className={styles.accordion}
            >
                {steps.map((step, index) => (
                    <Accordion.Item
                        className={styles.accordion__item}
                        value={`item-${index + 1}`}
                        key={step}
                    >
                        <Accordion.Trigger
                            className={styles.accordion__trigger}
                        >
                            {`${step} (${getCandidatesByStep(step).length})`}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                height={18}
                                width={18}
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Accordion.Trigger>
                        <Accordion.Content>
                            {getCandidatesByStep(step).length == 0 && (
                                <div className={styles.empty}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        height={24}
                                        width={24}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    No hay candidatos.
                                </div>
                            )}
                            {getCandidatesByStep(step).map((candidate) => (
                                <CandidateCard
                                    candidate={candidate}
                                    key={candidate.id}
                                />
                            ))}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}
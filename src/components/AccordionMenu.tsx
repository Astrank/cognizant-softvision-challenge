import React, { useState } from 'react';
import { useCandidates } from "../context/CandidateContext";
import { CandidateCard } from "../components/CandidateCard";
import styles from "./Component.module.scss";
import { DialogContent } from "./DialogContent";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, PlusIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

export const AccordionMenu: React.FC = ({}) => {
    const { steps, getCandidatesByStep } = useCandidates();

    return (
        <div className={styles.accordion__menu}>
            <Dialog.Root>
                <Dialog.Trigger className={styles.btn__add}>
                        <PlusIcon aria-hidden />
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
                            <ChevronDownIcon aria-hidden />
                        </Accordion.Trigger>
                        <Accordion.Content>
                            {getCandidatesByStep(step).length == 0 && (
                                <div className={styles.candidate}>
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
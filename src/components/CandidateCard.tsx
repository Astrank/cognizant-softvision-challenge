import React from "react";
import { Candidate } from "../types/candidate";

interface CandidateProps {
    candidate: Candidate;
    ascend: (id: string) => void;
    descend: (id: string) => void;
}

export const CandidateCard: React.FC<CandidateProps> = ({
    candidate,
    ascend,
    descend,
}) => {
    return (
        <div>
            <div>
                <div>{candidate.name}</div>
                <div>{candidate.comments}</div>
            </div>
            <div>
                <button onClick={() => descend(candidate.id)}>{"<"}</button>
                <button onClick={() => ascend(candidate.id)}>{">"}</button>
            </div>
        </div>
    );
};

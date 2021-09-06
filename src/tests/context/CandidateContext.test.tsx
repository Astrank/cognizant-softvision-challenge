import React from "react";
import { render } from "@testing-library/react";
import { useCandidates } from "../../context/CandidateContext";
import { Candidate } from "../../types/candidate";

jest.mock("../../context/CandidateContext");

let candidates: Candidate[],
    steps: Candidate["step"][],
    getCandidatesByStep: (step: Candidate["step"]) => Candidate[],
    addCandidate: (candidate: Candidate) => void,
    ascendCandidate: (id: Candidate["id"]) => void,
    descendCandidate: (id: Candidate["id"]) => void,
    deleteCandidate: (id: Candidate["id"]) => void;

describe("CandidateContext", () => {
    beforeEach(() => {
        candidates = [
            {
                id: "goncy",
                name: "Gonzalo Pozzo",
                step: "Entrevista técnica",
                comments: "Medio pelo",
            },
            {
                id: "doe",
                name: "John Doe",
                step: "Entrevista inicial",
                comments: "",
            },
        ];
        steps = [
            "Entrevista inicial",
            "Entrevista técnica",
            "Oferta",
            "Asignación",
            "Rechazo",
        ];
        getCandidatesByStep = jest.fn();
        addCandidate = jest.fn();
        ascendCandidate = jest.fn();
        descendCandidate = jest.fn();
        deleteCandidate = jest.fn();

        // useCandidates.mockReturnValue({
        //     candidates: candidates,
        //     steps: steps,
        //     getCandidatesByStep: getCandidatesByStep,
        //     addCandidate: addCandidate,
        //     ascendCandidate: ascendCandidate,
        //     descendCandidate: descendCandidate,
        //     deleteCandidate: deleteCandidate
        // })
    })
})
import React from "react";
import { CandidateCard } from "../../components/CandidateCard";
import { render, fireEvent, act } from "@testing-library/react";
import { Candidate } from "../../types/candidate";
import { useCandidates } from "../../context/CandidateContext";

jest.mock("../../context/CandidateContext");

describe("CandidateCard", () => {
    let expectedCandidate: Candidate,
        expectedAscend: (id: Candidate["id"]) => void,
        expectedDescend: (id: Candidate["id"]) => void;

    beforeEach(() => {
        expectedCandidate = {
            id: "goncy",
            name: "Gonzalo Pozzo",
            step: "Entrevista técnica",
            comments: "Medio pelo",
        };
        expectedAscend = jest.fn();
        expectedDescend = jest.fn();

        // useCandidates.mockReturnValues({
        //     ascendCandidate: expectedAscend,
        //     descendCandidate: expectedDescend,
        // });
    });

    test("should render candidate name and comments", () => {
        const { getByText } = render(
            <CandidateCard candidate={expectedCandidate} />
        );

        getByText(expectedCandidate.name);
        getByText(expectedCandidate.comments);
    });

    test("descend button should call descend function with candidate id", async () => {
        const { getByText } = render(
            <CandidateCard candidate={expectedCandidate} />
        );

        const descendBtn = getByText("<");

        await act(async () => {
            fireEvent.click(descendBtn);
        });

        expect(expectedDescend).toHaveBeenCalledTimes(1);
        expect(expectedDescend).toHaveBeenCalledWith(expectedCandidate.id);
    });

    test("ascend button should call ascend function with candidate id", async () => {
        const { getByText } = render(
            <CandidateCard candidate={expectedCandidate} />
        );

        const ascendBtn = getByText(">");

        await act(async () => {
            fireEvent.click(ascendBtn);
        });

        expect(expectedAscend).toHaveBeenCalledTimes(1);
        expect(expectedAscend).toHaveBeenCalledWith(expectedCandidate.id);
    });
});

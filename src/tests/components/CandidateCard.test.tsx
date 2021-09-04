import React from "react";
import { CandidateCard } from "../../components/CandidateCard";
import { render, fireEvent, act } from "@testing-library/react";
import { Candidate } from "../../types/candidate";

describe("CandidateCard", () => {
    let expectedCandidate: Candidate,
        expectedAscend: (id: string) => void,
        expectedDescend: (id: string) => void;

    beforeEach(() => {
        expectedCandidate = {
            id: "goncy",
            name: "Gonzalo Pozzo",
            step: "Entrevista técnica",
            comments: "Medio pelo",
        };
        expectedAscend = jest.fn();
        expectedDescend = jest.fn();
    });

    test('should render candidate name and comments', () => {
        const { getByText } = render(
            <CandidateCard
                candidate={expectedCandidate}
                ascend={expectedAscend}
                descend={expectedDescend}
            />
        );

        getByText(expectedCandidate.name);
        getByText(expectedCandidate.comments);
    });
    

    test("descend button should call descend function with candidate id", async () => {
        const { getByText } = render(
            <CandidateCard
                candidate={expectedCandidate}
                ascend={expectedAscend}
                descend={expectedDescend}
            />
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
            <CandidateCard
                candidate={expectedCandidate}
                ascend={expectedAscend}
                descend={expectedDescend}
            />
        );

        const ascendBtn = getByText(">");

        await act(async () => {
            fireEvent.click(ascendBtn);
        });

        expect(expectedAscend).toHaveBeenCalledTimes(1);
        expect(expectedAscend).toHaveBeenCalledWith(expectedCandidate.id);
    });
});

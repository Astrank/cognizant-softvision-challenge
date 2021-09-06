import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import api from "../api";
import { Candidate } from "../types/candidate";

interface Props {
    children: ReactNode;
}

export interface CandidateService {
    candidates: Candidate[];
    steps: Candidate["step"][];
    getCandidatesByStep: (step: Candidate["step"]) => Candidate[];
    addCandidate: (candidate: Candidate) => void;
    updateCandidate: (candidate: Candidate) => void;
    ascendCandidate: (id: Candidate["id"]) => void;
    descendCandidate: (id: Candidate["id"]) => void;
    deleteCandidate: (id: Candidate["id"]) => void;
}

const defaultServiceValues: CandidateService = {
    candidates: [],
    steps: [],
    getCandidatesByStep: (step: Candidate["step"]) => {
        const asd: Candidate[] = [];
        return asd;
    },
    addCandidate: (candidate: Candidate) => {},
    updateCandidate: (candidate: Candidate) => {},
    ascendCandidate: (id: Candidate["id"]) => {},
    descendCandidate: (id: Candidate["id"]) => {},
    deleteCandidate: (id: Candidate["id"]) => {},
};

const CandidateContext = createContext<CandidateService>(defaultServiceValues);

export const useCandidates = () => useContext(CandidateContext);

export const CandidateProvider = ({ children }: Props) => {
    const candidates = useCandidateProvider();
    return (
        <CandidateContext.Provider value={candidates}>
            {children}
        </CandidateContext.Provider>
    );
};

function useCandidateProvider() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const steps: Candidate["step"][] = [
        "Entrevista inicial",
        "Entrevista técnica",
        "Oferta",
        "Asignación",
        "Rechazo",
    ];

    useEffect(() => {
        if (candidates.length == 0) {
            api.candidates
                .list()
                .then((candidates) => setCandidates(candidates));
        }
    }, []);

    const getCandidatesByStep = (step: Candidate["step"]) => {
        return candidates.filter((candidate) => candidate.step === step);
    };

    const addCandidate = (candidate: Candidate) => {
        setCandidates(candidates.concat(candidate));
    };

    const updateCandidate = (candidate: Candidate) => {
        candidates.map((c, index) => {
            if(c.id === candidate.id) {
                candidates.splice(index, 1, candidate)
                return;
            }
        })
    };

    const ascendCandidate = (id: Candidate["id"]) => {
        let candidate = candidates.find((c) => c.id === id);

        if (candidate) {
            let step = steps.indexOf(candidate.step);

            if (step == steps.length) {
                candidates.splice(candidates.indexOf(candidate), 1);
                setCandidates([...candidates]);
            }

            candidate.step = steps[step + 1];
            setCandidates([...candidates]);
        }
    };

    const descendCandidate = (id: Candidate["id"]) => {
        const candidate = candidates.find((c) => c.id === id);

        if (candidate) {
            const stepIndex = steps.indexOf(candidate.step);

            if (stepIndex == 0) {
                candidates.splice(candidates.indexOf(candidate), 1);
                setCandidates([...candidates]);
            }

            candidate.step = steps[stepIndex - 1];
            setCandidates([...candidates]);
        }
    };

    const deleteCandidate = (id: Candidate["id"]) => {
        candidates.map((candidate, index) => {
            if (candidate.id === id) {
                candidates.splice(index, 1);
                setCandidates([...candidates]);
            }
        });
    };

    return {
        candidates,
        steps,
        getCandidatesByStep,
        addCandidate,
        updateCandidate,
        ascendCandidate,
        descendCandidate,
        deleteCandidate,
    };
}

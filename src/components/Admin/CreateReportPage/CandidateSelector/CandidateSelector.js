import React from 'react';

import { Candidate } from './Candidate';

const CandidateSelector = ({ candidates, getCandidateData }) => {
    return (
        candidates.map((can, i) => (
            <Candidate
                i={i}
                id={can.id}
                key={can.id}
                name={can.name}
                email={can.email}
                getData={getCandidateData}
            />
        ))

    )
}

export { CandidateSelector }
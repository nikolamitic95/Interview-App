import React from 'react';

import { Candidate } from './Candidate';


const Candidates = ({ candidates }) => {
    return (
        candidates.map(candidate => (
            <Candidate
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                email={candidate.email}
            />

        ))

    )
}

export { Candidates }
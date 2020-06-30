import { baseAPI } from '../shared/baseApi';
import { CandidateObj } from '../entities/CandidateObj'

import Axios from 'axios'


class CandidateService {

    getCandidates() {
        return baseAPI.get('candidates')
            .then(response => response.data)
            .then(candidateList => {
                let newCandidateList = candidateList.map(candidate => new CandidateObj(candidate))
                return newCandidateList;
            })
            .catch(error => console.log(error))
    }

    getCandidatesInfo(id) {
        return baseAPI.get(`candidates/${id}`)
            .then(response => new CandidateObj(response.data))
            .catch(error => console.log(error))
    }

 
    post(reportObj, token) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:3333/api/reports',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: reportObj
        })
    }
}

export const candidateService = new CandidateService();
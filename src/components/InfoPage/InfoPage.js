import React from 'react';

import { candidateService } from '../../services/candidateService';
import { reportService } from '../../services/reportService';
import { Header } from '../HomePage/Header/Header';
import { CandidateInfo } from './CandidateInfo/CandidateInfo';
import { ReportInfo } from './ReportInfo/ReportInfo';
import Modal from 'react-modal';

class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            reports: [],
            modalIsOpen: false
        }
    }

    componentDidMount() {
        candidateService.getCandidatesInfo(this.props.match.params.id)
            .then(data => this.setState({ candidates: data }))

        reportService.getReports()
            .then(data => this.setState({ reports: data }))
    }

    openModal = () => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
    }

    render() {
        return (
            <div>
                <Header />
                <CandidateInfo
                    key={this.state.candidates.id}
                    name={this.state.candidates.name}
                    email={this.state.candidates.email}
                    dob={this.state.candidates.birthday}
                    education={this.state.candidates.education}
                />
                <ReportInfo
                    reports={this.state.reports}
                    candidateId={this.props.match.params.id}
                    openModal={this.openModal}
                    modalIsOpen={this.state.modalIsOpen}
                />
            </div>
        )
    }
}

export { InfoPage }
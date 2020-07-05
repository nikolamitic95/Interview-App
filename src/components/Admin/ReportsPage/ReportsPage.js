import React from 'react';

import { AdminHeader } from '../AdminHeader/AdminHeader';
import { reportService } from '../../../services/reportService';
import { Reports } from '../ReportsPage/Reports/Reports';
import { Container } from 'react-bootstrap';
import { ReportsSearch } from './Search/ReportsSearch';
import { search } from '../../../shared/utilities';
import { authentication, reportFromServer } from '../../../services/adminService';


class ReportsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            reports: [],
            filteredReports: [],
            modalIsOpen: false
        }
    }

    componentDidMount() {
        reportService.getReports()
            .then(data => this.setState({ reports: data, filteredReports: data }))
    }

    searchedReports = (textInput) => {
        const results = search(this.state.reports, ['companyName', 'candidateName'], textInput)
        this.setState({ filteredReports: results })
    }

    openModal = () => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
    }

    removeReport = (id) => {
        let tempArray = this.state.filteredReports
        let elementToRemove = this.state.filteredReports.filter(report => report.reportId === id)
        const index = tempArray.indexOf(elementToRemove[0]);
        if (index > -1) {
            tempArray.splice(index, 1)
        }
        this.setState({ filteredReports: tempArray })
        reportFromServer.remove(id)
    }

    render() {
        const access = authentication.isLogon()
        if (!access) {
            this.props.history.push('/admin')
        }

        return (
            <div>
                <AdminHeader />
                <Container>
                    <ReportsSearch searchedReports={this.searchedReports} />
                </Container>
                <Container>
                    <Reports
                        reports={this.state.filteredReports}
                        openModal={this.openModal}
                        modalIsOpen={this.state.modalIsOpen}
                        removeReport={this.removeReport}
                    />
                </Container>
            </div>
        )
    }
}

export { ReportsPage }
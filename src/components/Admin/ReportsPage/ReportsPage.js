import React from 'react';

import { AdminHeader } from '../AdminHeader/AdminHeader';
import { reportService } from '../../../services/reportService';
import { ReportsList } from './Reports/ReportsList';
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
            modalIsOpen: false,
            report: {}
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

    openModal = (report = {}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, report  }))
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
                    <ReportsList
                        reports={this.state.filteredReports}
                        openModal={this.openModal}
                        modalIsOpen={this.state.modalIsOpen}
                        removeReport={this.removeReport}
                        report={this.state.report}
                    />
                </Container>
            </div>
        )
    }
}

export { ReportsPage }
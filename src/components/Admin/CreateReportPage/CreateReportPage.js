import React from 'react';

import styles from './CreateReportPage.module.css';

import { AdminHeader } from '../AdminHeader/AdminHeader';
import { authentication } from '../../../services/adminService';
import { candidateService } from '../../../services/candidateService';
import { companyService } from '../../../services/companyService';
import { search } from '../../../shared/utilities';
import { SearchCandidate, SearchCompany } from './SearchReportPage/SearchReportPage';
import { NavList } from './NavList/NavList';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CandidateSelector } from './CandidateSelector/CandidateSelector'
import { CompanySelector } from './CompanySelector/CompanySelector';
import { ReportDetails } from './ReportDetailsSelector/ReportDetailsSelector';
import { Link } from 'react-router-dom';


class CreateReportPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            candidates: [],
            filteredCandidate: [],
            company: [],
            filteredCompany: [],
            wizardStep: 1,
            newReportData: {
                candidateId: null,
                candidateName: null,
                companyId: null,
                companyName: null,
                interviewDate: '',
                phase: '',
                status: '',
                note: ''
            }
        }
    }

    componentDidMount() {
        candidateService.getCandidates()
            .then(data => {
                this.setState({ candidates: data, filteredCandidate: data })
            })
        companyService.getCompanies()
            .then(data => {
                this.setState({ company: data, filteredCompany: data })
            })

    }

    searcedCandidate = (textInput) => {
        const result = search(this.state.candidates, ["name"], textInput)
        this.setState({ filteredCandidate: result })
    }

    searcedCompany = (textInput) => {
        const result = search(this.state.company, ["companyName"], textInput)
        this.setState({ filteredCompany: result })
    }

    nextStep = () => {
        let currentStep = this.state.wizardStep;
        if (currentStep === 1) {
            if (this.state.newReportData.candidateId !== null) {
                currentStep++;
                this.setState({ wizardStep: currentStep })
            } else {
                alert('You must select a candidate first!')
            }
        } else if (currentStep === 2) {
            if (this.state.newReportData.companyId !== null) {
                currentStep++;
                this.setState({ wizardStep: currentStep })

            } else {
                alert('You must select a company first!')
            }

        } else if (currentStep === 3) {
            let token = JSON.parse(sessionStorage.getItem('accessToken'));
            candidateService.post(this.state.newReportData, token)
        }
    }

    previousStep = () => {
        let currentStep = this.state.wizardStep;
        if (currentStep > 1) {
            currentStep--;
            this.setState({ wizardStep: currentStep })
            if (currentStep < 2) {
                currentStep--;
            }
        }
    }

    getCandidateData = (id, name) => {
        let someReport = { ...this.state.newReportData }
        someReport.candidateName = name;
        someReport.candidateId = id
        this.setState({ newReportData: someReport })
    }

    getCompanyData = (id, name) => {
        let someReport = { ...this.state.newReportData }
        someReport.companyName = name;
        someReport.companyId = id;
        this.setState({ newReportData: someReport })
    }

    setDate = (date) => {
        let someReport = { ...this.state.newReportData }
        someReport.interviewDate = date;
        this.setState({ newReportData: someReport })
    }
    setPhase = (phase) => {
        let someReport = { ...this.state.newReportData }
        someReport.phase = phase;
        this.setState({ newReportData: someReport })
    }
    setStatus = (status) => {
        let someReport = { ...this.state.newReportData }
        someReport.status = status;
        this.setState({ newReportData: someReport })
    }
    setNotes = (notes) => {
        let someReport = { ...this.state.newReportData }
        someReport.note = notes;
        this.setState({ newReportData: someReport })
    }
    render() {

        const access = authentication.isLogon()
        if (!access) {
            this.props.history.push('/admin')
        }

        return (
            <div>
                <AdminHeader />
                <Container className={styles.wrapper} fluid>
                    <Row>
                        <Col lg="3" md='4' sm='4'>
                            <NavList
                                wizardStep={this.state.wizardStep}
                                candidateName={this.state.newReportData.candidateName}
                                companyName={this.state.newReportData.companyName}
                            />
                        </Col>
                        {this.state.wizardStep === 1 &&
                            <Col className={styles.line} lg="9" md='8' sm='8'>

                                <Row>
                                    <Col lg="12">
                                        <SearchCandidate
                                            searcedCandidate={this.searcedCandidate}
                                        />
                                    </Col>
                                    <Col lg='12'>

                                        <Row >
                                            <CandidateSelector
                                                candidates={this.state.filteredCandidate}
                                                getCandidateData={this.getCandidateData}
                                            />
                                            <Col className={styles.end} lg='12'>
                                                <Button onClick={this.nextStep} variant="primary">Next</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>}
                        {this.state.wizardStep === 2 &&
                            <Col className={styles.line} lg="9" md='8' sm='8'>

                                <Row>
                                    <Col lg="12">
                                        <SearchCompany
                                            searcedCompany={this.searcedCompany}
                                        />
                                    </Col>
                                    <Col lg='12'>

                                        <Row>
                                            <CompanySelector
                                                company={this.state.filteredCompany}
                                                getCompanyData={this.getCompanyData}
                                            />
                                            <Col className={styles.prev} lg='6'>
                                                <Button onClick={this.previousStep} variant="primary">Back</Button>
                                            </Col>
                                            <Col className={styles.end} lg="6">
                                                <Button onClick={this.nextStep} variant="primary">Next</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>}
                        {this.state.wizardStep === 3 &&
                            <Col className={styles.line} lg="9" md='8' sm='8'>
                                <Row>
                                    <Col lg='12'>
                                        <Row>
                                            <ReportDetails
                                                setDate={this.setDate}
                                                setPhase={this.setPhase}
                                                setStatus={this.setStatus}
                                                setNotes={this.setNotes}
                                            />
                                            <Col className={styles.prev} lg='6'>
                                                <Button onClick={this.previousStep} variant="primary">Back</Button>
                                            </Col>
                                            <Col className={styles.end} lg="6">
                                              <Link to='/admin/reports'><Button onClick={this.nextStep} variant="primary">Create</Button></Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>}
                    </Row>
                </Container>
            </div>
        )
    }
}

export { CreateReportPage }
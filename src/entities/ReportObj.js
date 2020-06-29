export class ReportObj {
    constructor(apiReport) {
        this.ReportId = apiReport.id
        this.candidateId = apiReport.candidateId
        this.candidateName = apiReport.candidateName
        this.companyId = apiReport.companyId
        this.companyName = apiReport.companyName
        this.interviewDate = apiReport.interviewDate
        this.phase = apiReport.phase
        this.status = apiReport.status
        this.note = apiReport.note
    }
}


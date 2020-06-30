import { baseAPI } from '../shared/baseApi';
import { ReportObj } from '../entities/ReportObj'

class ReportService {

    getReports() {
        return baseAPI.get('reports')
            .then(response => response.data)
            .then(reportList => {
                let newReportList = reportList.map(report => new ReportObj(report))
                return newReportList;
            })
            .catch(error => console.log(error))
    }

    postReport(reportObject, token) {
        return baseAPI.post('reports', reportObject, {

            Authorization: `Bearer ${token}`
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
}

export const reportService = new ReportService();
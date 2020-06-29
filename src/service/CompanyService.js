import { baseAPI } from '../shared/baseApi';
import { CompanyObj } from '../entities/CompanyObj'


class CompanyService {
    getCompanies() {
        return baseAPI.get('companies')
            .then(response => response.data)
            .then(companyList => {
                let newCompanyList = companyList.map(company => new CompanyObj(company))
                return newCompanyList;
            })
            .catch(error => console.log(error))
    }
}

export const companyService = new companyService();
export class CompanyObj {
    constructor(companyApi) {
        this.CompanyId = companyApi.id;
        this.companyName = companyApi.name;
        this.companyEmail = companyApi.email;
    }
}


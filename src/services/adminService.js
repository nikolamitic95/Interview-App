import axios from 'axios';
import {storageService} from './storageService'

export const postAdmin = ({ email, password }) => {
    return axios.post('http://localhost:3333/login', { email, password })
}

class AuthenticationImp {
    isLogon() {
        const permission = JSON.parse(sessionStorage.getItem("accessToken"));
        if (permission) {
            return true;
        } return false;
    }
}

class ReportFromServerImp{
    remove(id){
        const key=storageService.get("accessToken")
        return axios({
            method: "DELETE",
            url: `http://localhost:3333/api/reports/${id}`,
            headers:{
                Authorization: `Bearer ${key}`
            }
        })
    }  
}

export const authentication = new AuthenticationImp();
export const reportFromServer= new ReportFromServerImp();

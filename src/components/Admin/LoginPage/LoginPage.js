import React from 'react';

import styles from './LoginPage.module.css';

import { TextInput, Container, Button } from 'react-materialize';
import { storageService } from '../../../services/storageService';
import { postAdmin } from '../../../services/adminService';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrongUser: false
        }
    }

    loginCheck = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {

        postAdmin(this.state)
            .then(response => {

                storageService.set('accessToken', response.data.accessToken)
                this.props.history.push('/admin/reports')
            })
            .catch(error => {

                this.setState({ wrongUser: true })
            });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div onKeyUp={(event) => { if (event.keyCode === 13) { this.submitData() } }} className={styles.loginForm}>
                    <div><i className={`fa fa-user ${styles.user}`}></i>
                    </div>
                    <div>
                        {this.state.wrongUser ? <span className={styles.wrong}> wrong email or password</span> : ""}
                    </div>
                    
                    <TextInput
                        className={styles.input}
                        onChange={this.loginCheck}
                        email
                        placeholder="Email"
                        name="email"
                        validate
                    />

                    <TextInput
                        className={styles.input}
                        onChange={this.loginCheck}
                        placeholder="Password"
                        name="password"
                        password
                    />
                    <div className={styles.btn}>
                        <Button className={`${styles.btn1} ${styles.fadeIn}`} onClick={this.submitData}>Login</Button>
                    </div>
                </div>
            </div >
        )
    }
}


export { LoginPage }
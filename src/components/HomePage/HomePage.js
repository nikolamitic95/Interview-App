import React from 'react';

import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { candidateService } from '../../service/CandidateService';
import { Container, Row } from 'react-materialize';
import { Candidates } from './Candidates/Candidates';



class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
        }

    }

    componentDidMount() {
        candidateService.getCandidates()
            .then(data => {
                return this.setState({ candidates: data })
            })
    }






    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Search />
                    <hr></hr>
                    <Row>
                    <Candidates candidates={this.state.candidates} />
                    </Row>
                </Container>
            </div>
        )
    }
}

export { HomePage }
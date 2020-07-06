import React from 'react';

import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { candidateService } from '../../services/candidateService';
import { Container, Row } from 'react-materialize';
import { Candidates } from './Candidates/Candidates';
import { search } from '../../shared/utilities';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            filteredCandidates: [],
        }

    }

    componentDidMount() {
        candidateService.getCandidates()
            .then(data => {
                return this.setState({ candidates: data, filteredCandidates: data })
            })
    }

    searchedCandidates = (textInput) => {
        const res = search(this.state.candidates, ['name'], textInput)
        this.setState({ filteredCandidates: res })
    }

    render() {
        return (
            <div>
                <Header isHomePage={true}/>
                <Container>
                    <Search
                        searchedCandidates={this.searchedCandidates}
                    />
                    <hr></hr>
                </Container>

                <Container>
                    <Row>
                        <Candidates
                            candidates={this.state.filteredCandidates}
                        />
                    </Row>
                </Container>
            </div>
        )
    }
}

export { HomePage }
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const { characters } = this.state
    
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        return (
        <div className='App'>
            <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
        </div>
        );
    }

}



export default App;
import React from 'react';
import './App.css'
import Header from './../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headerText: "This is a cool app;",
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (inputText) => {




        // this.setState({ headerExpanded: inputText.length > 0 ? false : true }); or
        // this.setState({ headerExpanded: !(inputText.length > 0) }); or
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };
    render() {

        console.log(name('cloud'));
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox handleInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );

    }
}


export default App;
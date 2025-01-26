import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBounty from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBounty>
                        <RandomChar/>
                    </ErrorBounty>
                    <div className="char__content">
                        <ErrorBounty>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBounty>
                        <ErrorBounty>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBounty>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;
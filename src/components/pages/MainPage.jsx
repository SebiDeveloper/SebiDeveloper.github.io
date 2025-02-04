import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBounty from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <ErrorBounty>
                <RandomChar/>
            </ErrorBounty>
            <div className="char__content">
                <ErrorBounty>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBounty>
                <ErrorBounty>
                    <CharInfo charId={selectedChar}/>
                </ErrorBounty>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
};

export default MainPage;
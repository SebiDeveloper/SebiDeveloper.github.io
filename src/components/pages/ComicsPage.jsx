import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SingleComicPage from "./SingleComicPage";


import AppBaner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
    return (
        <>
            <AppBaner/>
            <Routes>
                <Route>
                    <Route path=":id" element={<SingleComicPage/>}/>
                    <Route path="/" element={<ComicsList/>}/>
                </Route>
            </Routes>
        </>
    )
};

export default ComicsPage;
import React, {FC} from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

const Wraper: FC = () => {
    return (
        <div className='wraper'>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={ <MainPage/> } />
                </Routes>
            </Router>
        </div>
    )
}

export default Wraper;
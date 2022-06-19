import React, {useEffect} from 'react';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreateBug from "./components/CreateBug";
import BugsPage, {handleSidenavOpen} from "./components/BugsPage";
import {useDispatch, useSelector} from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import BugEditPage from "./components/BugEditPage";
import Loading from "./components/Loading";
function App() {

    const {isLoading} = useSelector((store) => store.bug);

    useEffect(()=>{
        // handleSidenavOpen();
    })

    return (
        <div className="App">
            {/*<SideNavbar/>*/}
            <Routes>
                <Route path={'bugs'} element={<BugsPage/>}>

                </Route>
                <Route path={"report"} element={<CreateBug/>}>

                </Route>
                <Route path={"bugs/edit/:_id"} element={isLoading ? <Loading/>:<BugEditPage/>}>

                </Route>
            </Routes>

        </div>
    );
}

export default App;

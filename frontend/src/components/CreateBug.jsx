import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findAllBugServer, postBugServer} from "../controller/Redux/bugSlice";
import {handleSidenavClose, handleSidenavOpen} from "./BugsPage";
import {Link} from "react-router-dom";
import SideNavbar from "./SideNavbar";

export const bugStatus = ['Open', 'To be tested', 'In progress', 'Closed'];
export const bugStatusColor = ['#09AEEB', '#74CA81', '#FBC01F', '#48E6CE'];
export const bugSeverityColor = ['#74CA81', '#FBC01F', '#FE6401', '#FF0000'];
export const bugSeverity = ['Minor', 'Major', 'Critical', 'Show Stopper'];


function handleSidenavCloseCreateBugs() {
    document.getElementById('cr-bu').style.marginLeft = "80px";
}
function handleSidenavOpenCreateBugs() {
    document.getElementById('cr-bu').style.marginLeft = "21vw";

}


export default function CreateBug() {

    const date = new Date();
    const getDate = date.getDate();
    date.setDate(getDate);
    const defaultValue = date.toLocaleDateString('en-CA');

    const dispatch = useDispatch()

    const [bugData, setBugData] = useState({
        bug: '',
        due: '',
        created: '',
        status: '',
        assigned: '',
        assignee: '',
        severity: '',
        description: '',
    })

    function handleClick() {
        dispatch(postBugServer(bugData));
        dispatch(findAllBugServer());
    }


    function handleChange(event) {
        console.log(event.target.value)
        const field = event.target.name
        console.log()
        const newState = {...bugData, [field]: event.target.value}
        console.log(newState)
        setBugData(newState);
        // console.log(bugData)
    }

    useEffect(() => {
        handleSidenavOpenCreateBugs();
        handleSidenavOpen()
    })

    return (
        <>
            <SideNavbar
                open = {handleSidenavOpenCreateBugs}
                close = {handleSidenavCloseCreateBugs}
            />
            <div className={"bug-crt"} id={"cr-bu"} style={{transition: "1s"}}>
                <nav className={"status-nav"}>
                    <div className={"bug-title"}>
                        <input placeholder={"Bug Title"} name={"bug"} className={"title"}
                               onChange={handleChange}/>
                    </div>
                    <div className={"cont-status"}>
                        {/*{bugData.status === '0'? "HELLO": "qwertyu"}*/}
                        <div className={"status"}>
                            <button onClick={handleChange} name={"status"} value={0}
                                    className={bugData.status === '0' ? "sel-but" : "null"}>
                                <div className={"opn"}/>
                                Open
                            </button>
                            <button onClick={handleChange} name={"status"} value={1}
                                    className={bugData.status === '1' ? "sel-but" : "null"}>
                                <div className={"tbt"}/>
                                To be tested
                            </button>
                            <button onClick={handleChange} name={"status"} value={2}
                                    className={bugData.status === '2' ? "sel-but" : "null"}>
                                <div className={"ip"}/>
                                In progress
                            </button>
                            <button onClick={handleChange} name={"status"} value={3}
                                    className={bugData.status === '3' ? "sel-but" : "null"}>
                                <div className={"cld"}/>
                                Closed
                            </button>
                        </div>
                        <p>CURRENT STATUS</p>
                    </div>
                </nav>
                <div className={"bug-crt-body"}>
                    <div className={"bug-desc"}>
                        DESCRIPTION
                        <textarea name={"description"} onChange={handleChange}/>
                    </div>
                    <div className={"other-info"}>
                        <div className={"assign-cont"}>
                            <label>ASSIGNEE</label>
                            <input name={"assignee"} onChange={handleChange}/>
                        </div>
                        <div className={"assign-cont"}>
                            <label>ASSIGNED TO</label>
                            <input name={"assigned"} onChange={handleChange}/>
                        </div>
                        <div className={"sev-cont"}>
                            SEVERITY:
                            <div className={"sev-btn"}>
                                <button name={"severity"} className={bugData.severity === '0' ? 'min-sel' : "null"}
                                        id={"min"} value={0} onClick={handleChange}>Minor
                                </button>
                                <button name={"severity"} className={bugData.severity === '1' ? "maj-sel" : "null"}
                                        id={"maj"} value={1} onClick={handleChange}>Major
                                </button>
                                <button name={"severity"} className={bugData.severity === '2' ? "crit-sel" : "null"}
                                        id={"crit"} value={2} onClick={handleChange}>Critical
                                </button>
                                <button name={"severity"} className={bugData.severity === '3' ? "meg-sel" : "null"}
                                        id={"meg"} value={3} onClick={handleChange}>Show stopper
                                </button>
                            </div>
                        </div>
                        <div className={"curr-cont"}>
                            <p>CREATED ON:</p>
                            <input type={"date"} onChange={handleChange} name={"created"}/>
                        </div>
                        <div className={"due-cont"}>
                            <p>DUE DATE:</p>
                            <input type={"date"} onChange={handleChange} name={"due"}/>
                        </div>
                        <button onClick={handleClick} className={"bug-sub-btn"}>Create Bug</button>
                    </div>
                </div>
            </div>
        </>
    )
}

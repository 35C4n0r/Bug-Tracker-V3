import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {findAllBugServer, findOneBugServer, postBugServer} from "../controller/Redux/bugSlice";
import {handleSidenavOpen} from "./BugsPage";
import SideNavbar from "./SideNavbar";
import {useParams} from "react-router";

function handleSidenavCloseCreateBugs() {
    document.getElementById('cr-bu').style.marginLeft = "80px";
}
function handleSidenavOpenCreateBugs() {
    document.getElementById('cr-bu').style.marginLeft = "21vw";

}


function lateMapper(data) {

}


export default function BugEditPage() {

    const date = new Date();
    const getDate = date.getDate();
    date.setDate(getDate);
    const defaultValue = date.toLocaleDateString('en-CA');

    const dispatch = useDispatch()

    const {_id} = useParams()
    console.log(_id);
    // dispatch(findOneBugServer({_id: _id}))
    const {particularBug} = useSelector((store) => store.bug);

    useLayoutEffect(() => {
        handleSidenavOpenCreateBugs();
        handleSidenavOpen();
        console.log("qwedrfghjnm,./;'[]-=")
        // dispatch(findOneBugServer({_id: _id}))
    }, [])
    // dispatch(findOneBugServer({_id: _id}))




    console.log(particularBug)
    const l = particularBug.map((data)=>{return data.bug})
    console.log(l);
    const [bugData, setBugData] = useState({
        bug: particularBug?.map((data)=>{return data?.bug}) || "",
        due: particularBug.map((data)=>{return data.due}),
        created: particularBug.map((data)=>{return data.created}),
        status: particularBug.map((data)=>{return data.status}),
        assigned: particularBug.map((data)=>{return data.assigned}),
        assignee: particularBug.map((data)=>{return data.assignee}),
        severity: particularBug.map((data)=>{return data.severity}),
        description: particularBug.map((data)=>{return data.description}),
    })

    function handleClick() {
        // dispatch(putBugServer(bugData)); // TODO
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
                               onChange={handleChange} value={bugData.bug}/>
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
                        <textarea name={"description"} onChange={handleChange} value={particularBug.map((data)=>{return data.description})}/>
                    </div>
                    <div className={"other-info"}>
                        <div className={"assign-cont"}>
                            <label>ASSIGNEE</label>
                            <input name={"assignee"} onChange={handleChange} value={particularBug.map((data)=>{return data.assignee})}/>
                        </div>
                        <div className={"assign-cont"}>
                            <label>ASSIGNED TO</label>
                            <input name={"assigned"} onChange={handleChange} value={particularBug.map((data)=>{return data.assigned})}/>
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
                            <input type={"date"} onChange={handleChange} name={"created"} value={particularBug.map((data)=>{return data.created})}/>
                        </div>
                        <div className={"due-cont"}>
                            <p>DUE DATE:</p>
                            <input type={"date"} onChange={handleChange} name={"due"} value={particularBug.map((data)=>{return data.due})}/>
                        </div>
                        <button onClick={handleClick} className={"bug-sub-btn"}>Save Changes</button>
                        {/*{}*/}
                        {/*{particularBug[0].bug}*/}
                        {/*{particularBug[0].bug}*/}
                        {/*{particularBug[0].bug}*/}
                        {/*{particularBug[0].bug}*/}
                        {/*{particularBug[0].bug}*/}
                    </div>
                </div>
            </div>
        </>
    )
}

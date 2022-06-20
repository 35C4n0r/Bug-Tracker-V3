import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import {findAllBugServer, findOneBugServer, putBugServer} from "../controller/Redux/bugSlice";
import {handleSidenavOpen} from "./BugsPage";
import SideNavbar from "./SideNavbar";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import Caller from "./Caller";

function handleSidenavCloseCreateBugs() {
    document.getElementById('cr-bu').style.marginLeft = "80px";
}

function handleSidenavOpenCreateBugs() {
    document.getElementById('cr-bu').style.marginLeft = "21vw";

}


function lateMapper(data) {

}


const useConstructor = (callBack = () => {
}) => {
    const hasBeenCalled = useRef(false);
    if (hasBeenCalled.current) return;
    callBack();
    hasBeenCalled.current = true;
}


export default function BugEditPage() {

    const date = new Date();
    const getDate = date.getDate();
    date.setDate(getDate);
    const defaultValue = date.toLocaleDateString('en-CA');
    const dispatch = useDispatch()
    const {_id} = useParams()
    // console.log(_id);
    // dispatch(findOneBugServer({_id: _id}))

    useConstructor(() => {

        // dispatch(findOneBugServer({_id: _id}))
        console.log("Hello WOrld")
    })



    const {allBugs, particularBug} = useSelector((store) => store.bug);

    if (performance.navigation.type === performance.navigation.TYPE_RELOAD && particularBug.length === 0) {
        // console.log("refreshed")
        Caller({_id})
    }

    // dispatch(findOneBugServer({_id: _id}))
    // console.log(particularBug)
    // const l = particularBug.map((data)=>{return data.bug})
    // console.log(l);
    // let singleBugFull = allBugs.find((data)=>{
    //     if(data._id === _id){
    //         return data
    //     }
    //     console.log(data._id);
    // })
    // console.log(singleBugFull)
    // let theOne = singleBugFull();
    // function findInitState(field) {
    //     return singleBugFull.bug
    // }
    //
    // let initialState = {
    //     bug: findInitState('bug')
    // }
    // console.log(initialState)
    // let initialState = {
    //     bug: particularBug.map((data)=>{return data.bug}),
    //     due: particularBug.map((data)=>{return data.due}),
    //     created: particularBug.map((data)=>{return data.created}),
    //     status: particularBug.map((data)=>{return data.status}),
    //     assigned: particularBug.map((data)=>{return data.assigned}),
    //     assignee: particularBug.map((data)=>{return data.assignee}),
    //     severity: particularBug.map((data)=>{return data.severity}),
    //     description: particularBug.map((data)=>{return data.description}),
    // }
    // let initialState = {
    //     bug: '',
    //     due: '',
    //     created: '',
    //     status: '',
    //     assigned: '',
    //     assignee: '',
    //     severity: '',
    //     description: '',
    // }
    const [bugData, setBugData] = useState({
        _id: _id,
        bug: particularBug.map((data) => {
            return data.bug
        })[0],
        due: particularBug.map((data) => {
            return data.due
        })[0].slice(0, 10),
        created: particularBug.map((data) => {
            return data.created
        })[0].slice(0, 10),
        status: particularBug.map((data) => {
            return data.status
        })[0],
        assigned: particularBug.map((data) => {
            return data.assigned
        })[0],
        assignee: particularBug.map((data) => {
            return data.assignee
        })[0],
        severity: particularBug.map((data) => {
            return data.severity
        })[0],
        description: particularBug.map((data) => {
            return data.description
        })[0],
    })

    // console.log(particularBug, particularBug.map((data)=>{return data.status})[0], particularBug.map((data)=>{return data.due})[0].slice(0, 10))
    // console.log(String(bugData.status)[0])

    useEffect(() => {
        handleSidenavOpenCreateBugs();
        handleSidenavOpen();

        // dispatch(findOneBugServer({_id: _id}))

    }, [])

    // console.log(particularBug, bugData)

    function handleClick() {
        dispatch(putBugServer(bugData)); // TODO
        dispatch(findAllBugServer());
    }


    function handleChange(event) {
        // console.log(event.target.value)
        const field = event.target.name
        // console.log()
        const newState = {...bugData, [field]: event.target.value}
        // console.log(newState)
        setBugData(newState);
        // console.log(bugData)
    }

    return (
        <>
            <SideNavbar
                open={handleSidenavOpenCreateBugs}
                close={handleSidenavCloseCreateBugs}
            />
            <div className={"bug-crt"} id={"cr-bu"} style={{transition: "1s"}}>
                <nav className={"status-nav"}>
                    <div className={"bug-title"}>
                        <input placeholder={"Bug Title"} name={"bug"} className={"title"}
                               onChange={handleChange} value={bugData.bug}/> {/*Here*/}
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
                        <textarea name={"description"} onChange={handleChange} value={bugData.description}/>
                    </div>
                    <div className={"other-info"}>
                        <div className={"assign-cont"}>
                            <label>ASSIGNEE</label>
                            <input name={"assignee"} onChange={handleChange} value={bugData.assignee}/>
                        </div>
                        <div className={"assign-cont"}>
                            <label>ASSIGNED TO</label>
                            <input name={"assigned"} onChange={handleChange} value={bugData.assigned}/>
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
                            <input type={"date"} onChange={handleChange} disabled={true} name={"created"}
                                   value={bugData.created} style={{cursor: "not-allowed"}}/>
                        </div>
                        <div className={"due-cont"}>
                            <p>DUE DATE:</p>
                            <input type={"date"} onChange={handleChange} name={"due"}
                                   value={bugData.due}/>
                        </div>
                        <Link to={'/bugs'}>
                            <button onClick={handleClick} className={"bug-sub-btn"}>Save Changes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

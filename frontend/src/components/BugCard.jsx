import React from 'react';
import {bugStatus, bugSeverity, bugStatusColor, bugSeverityColor} from "./CreateBug";
import {Link, Route, Router, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findOneBugServer} from "../controller/Redux/bugSlice";
import BugsEditPage from "./BugEditPage";

export default function BugCard({props}) {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(findOneBugServer({_id: props._id}))
    }

    console.log(props)
    let dd = props.created.toString();
    let disp = dd.slice(0, 10);
    let dd2 = props.due.toString();
    let disp2 = dd2.slice(0, 10);
    return (
        <>
            <Link to={`edit/${props._id}`}>
                <div className={"bug-card"} style={{cursor: "pointer", fontWeight: 500}} onClick={handleClick}>
                    <div className={"b-title"}>
                        {props.bug}
                    </div>
                    <div className={"empty"}/>
                    <div className={"b-assignee"}>
                        {props.assignee}
                    </div>
                    <div className={"b-created"}>
                        {disp}
                    </div>
                    <div className={"b-due"}>
                        {disp2}
                    </div>
                    <div className={"b-status"}>
                        <div style={{
                            backgroundColor: bugStatusColor[props.status],
                            // width: "80%",
                            width: "fit-content",
                            textAlign: "center",
                            borderRadius: "50px",
                            padding: '5% 10%',
                            color: "whitesmoke",
                            fontWeight: "bold"
                        }}>
                            {bugStatus[props.status]}
                        </div>
                    </div>
                    <div className={"b-assigned"}>
                        {props.assigned}
                    </div>
                    <div className={"b-severity"}>
                        <div style={{
                            backgroundColor: bugSeverityColor[props.severity],
                            // width: "80%",
                            width: "fit-content",
                            textAlign: "center",
                            borderRadius: "50px",
                            padding: '5% 10%',
                            color: "whitesmoke",
                            fontWeight: "bold"
                        }}>
                            {bugSeverity[props.severity]}
                        </div>
                    </div>
                </div>
                <div className={"divider"}/>
            </Link>
        </>

    )
}

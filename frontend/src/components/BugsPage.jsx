import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findAllBugServer} from "../controller/Redux/bugSlice";
import BugCard from "./BugCard";
import {ReactComponent as Close} from '../assets/images/close.svg'
import {bugSeverity, bugSeverityColor, bugStatus, bugStatusColor} from "./CreateBug";
import SideNavbar from "./SideNavbar";
import {Link} from "react-router-dom";


export function handleSidenavClose() {
    document.getElementById('s-nav').style.width = "70px";
    document.getElementById('s-nav').style.borderRadius = "0px";
    document.getElementById('s-nav').style.backgroundColor = "inherit";
    // document.getElementById('s-nav').style.color = "transparent";
    document.getElementById("menu-svg").style.backgroundColor = "transparent";
    document.getElementById('s-nav').style.height = "100%";
    document.getElementById('s-nav').style.margin = "0 0 0 0";
    document.getElementById('s-nav').style.padding = "1vh 1vw";
    document.getElementById('menu-svg').style.height = '40px'
    document.getElementById('menu-svg').style.width = '40px'
    document.getElementById('menu-svg').style.marginRight = '2%'
    document.getElementById('menu-svg').style.marginTop = '8px'
    document.getElementById('n-cd').style.visibility = 'hidden'
}

function handleSidenavCloseBugsPage(){
    document.getElementById('n-nav').style.marginLeft = "70px";
}
function handleSidenavOpenBugsPage(){
    document.getElementById('n-nav').style.marginLeft = "21vw";
}

export function handleSidenavOpen() {
    document.getElementById('s-nav').style.width = "20vw";
    document.getElementById('s-nav').style.borderRadius = "30px";
    document.getElementById('s-nav').style.backgroundColor = "rgb(43, 43, 43)";
    document.getElementById('s-nav').style.height = "99%";
    document.getElementById("menu-svg").style.backgroundColor = "rgb(43, 43, 43)";
    document.getElementById('s-nav').style.margin = "0.5vh 0.25vw";
    document.getElementById('s-nav').style.padding = "5vh 3vw";
    document.getElementById('menu-svg').style.height = '0'
    document.getElementById('menu-svg').style.width = '0';
    document.getElementById('menu-svg').style.marginRight = '0%'
    document.getElementById('n-cd').style.visibility = 'visible'
    // document.getElementsByClassName('nav-card').
}


export default function BugsPage() {


    const {allBugs} = useSelector((store) => store.bug)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllBugServer());
        handleSidenavOpenBugsPage();
        handleSidenavOpen();


    }, [dispatch])


    function handleMapping(data) {
        console.log("I am Mapped")
        return (
            <BugCard
                props={data}
            />
        )
    }

    // console.log(allBugs)

    return (
        <div style={{backgroundColor: 'white'}}>
            <SideNavbar
                open = {handleSidenavOpenBugsPage}
                close = {handleSidenavCloseBugsPage}
            />
            <div className={"not-nav"} id={"n-nav"}>
                <>
                    <div className={"bug-card"} style={{
                        position: "sticky",
                        top: '0',
                        left: '0',
                        zIndex: "5",
                        backgroundColor: '#FFFEFE',
                        borderRadius: '10px',
                        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                    }}>
                        <div className={"b-title"}>
                            BUGS
                        </div>
                        <div className={"empty"}/>
                        <div className={"b-assignee"} style={{paddingLeft: '0.75%'}}>
                            REPORTER
                        </div>
                        <div className={"b-created"} style={{paddingLeft: '0.75%'}}>
                            CREATED
                        </div>
                        <div className={"b-due"} style={{paddingLeft: '0.75%'}}>
                            DUE
                        </div>
                        <div className={"b-status"} style={{paddingLeft: '0.75%'}}>
                            STATUS
                        </div>
                        <div className={"b-assigned"} style={{paddingLeft: '0.75%'}}>
                            ASSIGNEE
                        </div>
                        <div className={"b-severity"} style={{paddingLeft: '0.75%'}}>
                            SEVERITY
                        </div>
                    </div>
                    {/*<div className={"divider"}/>*/}
                </>
                {allBugs.map(handleMapping)}
            </div>
        </div>
    )
}

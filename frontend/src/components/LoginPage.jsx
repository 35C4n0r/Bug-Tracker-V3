import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {authorizeUser} from "../controller/Redux/authSlice";

export default function LoginPage() {

    let [creds, setCreds] = useState({
        name: '',
        password: '',
    })

    const dispatch = useDispatch();

    function handleCredChanges(event) {
        const {name, value} = event.target
        let newCreds = {
            ...creds, [name]: value
        }

        setCreds(newCreds)

    }

    function handleSubmit(event) {
        event. preventDefault();
        dispatch(authorizeUser({
            name: creds.name,
            password: creds.password,
        }))
    }


    return (
        <div className={"login"}>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"name"}>Username</label>
                <input name={"name"} type={"text"} onChange={handleCredChanges}/>
                <label htmlFor={"password"}>Username</label>
                <input name={"password"} type={"password"} onChange={handleCredChanges}/>
                <button  type={"submit"}>Log In</button>
            </form>
            <a href={''}>Don't have an account yet? Sign Up here</a>

        </div>
    )
}


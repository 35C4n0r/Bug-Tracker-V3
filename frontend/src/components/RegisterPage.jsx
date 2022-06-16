import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createUser} from "../controller/Redux/authSlice";

export default function RegisterPage() {

    let [creds, setCreds] = useState({
        mail: '',
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

    function handleSubmit(events) {
        events.preventDefault();
        dispatch(createUser(creds))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"mail"}>mail</label>
                <input name={"mail"} type={"email"} onChange={handleCredChanges}/>
                <label htmlFor={"name"}>Username</label>
                <input name={"name"} type={"text"} onChange={handleCredChanges}/>
                <label htmlFor={"password"}>password</label>
                <input name={"password"} type={"password"} onChange={handleCredChanges}/>
                <button type={"submit"}>Log In</button>
            </form>
        </div>
    )
}

import React from 'react'
import {useDispatch} from "react-redux";
import {findOneBugServer} from "../controller/Redux/bugSlice";

export default function Caller(props) {
    console.log(props._id)
    const dispatch = useDispatch();
    dispatch(findOneBugServer({_id: props._id}))
    return(
        <>
        </>
    )
}

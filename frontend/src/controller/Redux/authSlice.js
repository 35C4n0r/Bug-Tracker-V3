import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// import * as queryString from "querystring";
import qs from 'qs';

const URL = 'http://localhost:5000'


const initialState = {
    admin: false,
    loggedIn: false
}

export const createUser = createAsyncThunk(
    'auth/create',
    async (credentials, thunkAPI) => {
        try{
            // const {mail, name, password, role} = credentials;
            const res = await axios.post(`${URL}/auth/user`, qs.stringify(
                credentials
            ))
            return res.data;
        }
        catch (e) {

        }
    }
)

export const authorizeUser = createAsyncThunk(
    'auth/authorize',
    async (credentials, thunkAPI) => {
        try {
            const {name, password} = credentials;
            const res = await axios.get(`${URL}/auth`,{
                params:
                    {
                        name: name,
                        password: password,
                    }
            })
            return res.data
        } catch (e) {

        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [authorizeUser.pending]: (state) => {
        },
        [authorizeUser.fulfilled]: (state, action) => {
            state.loggedIn = action.payload;
            console.log(action.payload);
        },
        [authorizeUser.rejected]: (state, action) => {
            console.log(action)
        },

        //<- //////////////////////////////////////////////////////////// ->v //

        [createUser.pending]: (state) => {

        },

        [createUser.fulfilled]: (state, action) => {
            // state.loggedIn = action.payload === 1;
            console.log(action)
        },
        [createUser.rejected]: (state, action) => {

        },
    }
})

export default authSlice.reducer;

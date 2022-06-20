import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";


const URL = 'http://localhost:5000/bug'


const initialState = {
    allBugs: [],
    particularBug: [],
    isLoading: false,
}


export const postBugServer = createAsyncThunk(
    'bug/create',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${URL}/create`, qs.stringify(payload))
            return res.data;
        } catch (e) {

        }
    }
)

export const findAllBugServer = createAsyncThunk(
    'get/bug',
    async (filter, thunkAPI) => {
        console.log("I was called")
        const res = await axios.get(`${URL}/`, {
            params: {}
        })
        console.log(res.data)
        return res.data;
    }
)

export const findOneBugServer = createAsyncThunk(
    'get/oneBug',
    async (filter, thunkAPI) => {
        const res = await axios.get(`${URL}/`, {
            params: filter
        })
        // console.log(res.data)
        return res.data;

    }
)

const bugSlice = createSlice({
    name: 'bug',
    initialState: initialState,
    reducers: {

        putBugServer: (state, action) => {
            console.log("OOOOO LALALALALALA")
            axios.put(`${URL}/saveEdit`, action.payload).then(r => {})
            console.log(action.payload, action);
        }

    },
    extraReducers: {
        [postBugServer.pending]: (state, action) => {

        },
        [postBugServer.fulfilled]: (state, action) => {
            console.log(action)
        },
        [postBugServer.rejected]: (state, action) => {
            console.log(action)
        },

        [findAllBugServer.pending]: (state, action) => {
            // console.log("qwertyui")
        },

        [findAllBugServer.fulfilled]: (state, action) => {
            state.allBugs = action.payload;
            // console.log("UUUWWWWUUUU");
        },

        [findAllBugServer.rejected]: (state, action) => {
            // console.log("asdfghjk")
        },

        [findOneBugServer.fulfilled]: (state, action) => {
            // console.log("I am Fullfilled");
            state.particularBug = action.payload;
            console.log(state.particularBug);
            state.isLoading = false;
        },
        [findOneBugServer.pending]: (state, action) => {
            state.isLoading = true;
        },
        [findOneBugServer.rejected]: (state, action) => {
        }
    }
})

export const {putBugServer} = bugSlice.actions;
export default bugSlice.reducer;

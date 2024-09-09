import { createSlice } from "@reduxjs/toolkit";
import {userList} from '../../assets/static-data/user_data.js'

const userSlice = createSlice({
    name : "users",
    initialState : userList,
    reducers : {

    }
})
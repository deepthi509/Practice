import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
 const initialState= {
    loading: true,
    users: [],
    error: false,
}
export const userDetails = createAsyncThunk('user/userDetails', async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data)
    return res.data;
});
const UserData = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userDetails.pending, state => {
          state.loading = true
        })
        builder.addCase(userDetails.fulfilled, (state, action) => {
          state.loading = false
          state.users = action.payload
          state.error = ''
        })
        builder.addCase(userDetails.rejected, (state, action) => {
          state.loading = false
          state.users = []
          state.error = action.error.message
        })
      }
});
export default UserData.reducer

import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    loading:false,
    data:[],
    error:''

}
export const DemoData=createAsyncThunk('demo/demoData',async()=>{
  return await  axios.get('https://jsonplaceholder.typicode.com/users').then(res=>res.data)
    
})
const slice=createSlice({
    name:'demo',
    initialState,
    reducers:{},extraReducers:builder=>{
        builder.addCase(DemoData.pending,state=>{
            state.loading=true
        })
        builder.addCase(DemoData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload

        })
        builder.addCase(DemoData.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }

})
export default slice.reducer
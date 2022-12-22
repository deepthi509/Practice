import {configureStore} from '@reduxjs/toolkit'
import DemoSliceReducer from './DEMO/DemoSlice'
import UserDataSliceReducer from './UserDataSlice'
const store=configureStore({
    reducer:{
        userData:UserDataSliceReducer,
        demodata:DemoSliceReducer

    }
})
export default store
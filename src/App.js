/** @format */

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Normalref from "./components/normalref";
import ParentRef from "./components/ParentRef";
import Frparent from "./components/Frparent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Test from "./components/Test";
import ClickCounter from "./HOC/ClickCounter";
import MouseCounter from "./HOC/MouseCounter";
import ClickFun from "./Props/ClickFun";
import PropsFun from "./Props/PropsFun";
import { ProviderContext, UseContexts } from "./Context/Context";
import ComponentA from "./Context/ComponentA";
import Component1 from "./UseContext/Component1";
// import CounterObj from './UseReducer/CounterObj';
import Fetching from "./UseReducer/Fetching";
import Ref from "./Ref";
import Forms from "./coustm hooks/Form";
// import UseCallBack1 from './UseCall/UseCallBack';
import { UserView } from "./store/UserDataView";
import { DemoView } from "./store/DEMO/DemoView";
import ReuseTable from "./Table/ReuseTable";
import DemoTable from "./pages/DemoTable";
import RenderTable from "./pages/RenderTable";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
export const CreateContext = React.createContext();
export const SecondContext = React.createContext();
function App() {
  let test1 = "demo";
  const test2 = "const";
  console.log(test1, test2);
  return (
    <>
      <h1>Hii</h1>
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        width={500}
      />

      <DemoTable />
      {/* <RenderTable/> */}
      {/* <DemoView/> */}
      {/* <ReuseTable/> */}
      {/* <UserView/> */}
      {/* <Demo firstname='deepthi' lastname='rao'/> */}
      {/* <Forms/> */}
      {/* <UseCallback/> */}
      {/* <Ref/> */}
      {/* <CounterObj/> */}
      {/* <Fetching/> */}
      {/* <UseCallBack1/> */}

      {/* <CreateContext.Provider value='deepthi'>
      <SecondContext.Provider value='bhavya'>
      <Component1/>
      </SecondContext.Provider>
      
    </CreateContext.Provider> */}
      {/* <ProviderContext  value='deepthi'>
    <ComponentA />
    </ProviderContext> */}
      {/* <PropsFun/> */}
      {/* <ClickCounter/>
    <MouseCounter/> */}

      {/*   
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<DemoTable/>}/>
    <Route path="/demo" element={<RenderTable/>}/>
    
  </Routes>
  </BrowserRouter> */}
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Normalref from './components/normalref';
import ParentRef from './components/ParentRef';
import Frparent from './components/Frparent';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorBoundary from './components/ErrorBoundary';
import Test from './components/Test';
import ClickCounter from './HOC/ClickCounter';
import MouseCounter from './HOC/MouseCounter';
import ClickFun from './Props/ClickFun';
import PropsFun from './Props/PropsFun';
import {ProviderContext, UseContexts} from './Context/Context'
import ComponentA from './Context/ComponentA';
import Component1 from './UseContext/Component1';
import CounterObj from './UseReducer/CounterObj';
import Fetching from './UseReducer/Fetching';
import Ref from './Ref';
import Usecallback from './UseCallBack/Usecallback';
import Forms from './coustm hooks/Form';
import { Demo } from './TS-props/Demo';
import UseCallback from './UseCallBack/Usecallback';
export const CreateContext =React.createContext()
export const SecondContext =React.createContext()
function App() {



  return (
    <>
    {/* <Demo firstname='deepthi' lastname='rao'/> */}
    {/* <Forms/> */}
 <UseCallback/>
    {/* <Ref/> */}
    {/* <CounterObj/> */}
    {/* <Fetching/> */}

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
    </>
  //   <ErrorBoundary>
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<Frparent/>}/>
  //   <Route path="/parent" element={<ParentRef/>}/>
  //   <Route path="/normal" element={<Normalref/>}/>
  //   <Route path="/test" element={<Test/>}/>
  // </Routes>
  // </BrowserRouter>
  // </ErrorBoundary>
   
  );
}

export default App;

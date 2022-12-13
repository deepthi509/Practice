import React from "react";
const CreateContext=React.createContext()
const ProviderContext=CreateContext.Provider
const UseContexts=CreateContext.Consumer
export {ProviderContext,UseContexts} 
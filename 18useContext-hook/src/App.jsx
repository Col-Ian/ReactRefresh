/*
  useContext()
    React Hook that allows you to share values between multiple levels of components without passing props through each level

    Provider Component
      import {createContext} from 'react';
      export const MyContext = createContext();
      <MyContext.Provider value={value}>
        <Child />
      </MyContext.Provider>

    Consumer Components
      import React, {useContext} from 'react';
      import {MyContext} from './ComponentA';
      const value = useContext(MyContext)
*/

import ComponentA from "./ComponentA.jsx"

function App() {

  return (
    <>
      <ComponentA />
    </>
  )
}

export default App

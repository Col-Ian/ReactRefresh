/*
  useState()
    Re-renders the component when the state value changes.

  useRef()
    "use reference" Does not cause re-renders when its value changes.
    When you want a component to 'remember' some information, but you don't want that information to trigger new renders.

  Accessing/Interacting with DOM elements
  Handling Focus, Animations, and Transitions
  Managing Timers and Intervals
*/

import MyComponent from "./MyComponent"


function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App

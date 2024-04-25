import MyComponent from "./MyComponent.jsx"

/*
  updater function
    A function passed as an argument to setState(), usually 
    ex setYear(updater function)
    Allow for safe updates based on the previous state
    Used with multiple state updates and asynchronous functions
    Good practice to use updater functions

    function increment(){
      setCount(count+1)
      setCount(count+1)
    }
    This function will only increase the count by 1 once, not twice.
    React uses the CURRENT state to calculate the NEXT state.
    Set functions do not trigger an update.
    React batches together state updates for performance reasons.
    NEXT state becomes the CURRENT state after an update.
*/
function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App

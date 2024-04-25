/*
  useEffect()
    React Hook that tells React DO SOME CODE WHEN (pick one):
      This component re-renders
      This component mounts
      The state of a value changes

  useEffect(function, [dependencies])

  useEffect(() => {})
    Runs after every re-render

  useEffect(() => {}, [])
    Runs only on mount

  useEffect(() => {}, [value])
    Runs on mount + when value changes

    Uses
      Event Listeners
      DOM manipulation
      Subscriptions (real-time updates)
      Fetching Data from an API
      Clean up when a component unmounts
*/

import MyComponent from "./MyComponent.jsx"

function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App

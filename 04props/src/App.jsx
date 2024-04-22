/*

Props
  Read-only properties that are shared between components.
  A parent component can send data to a child component.
  <Component key=value />

propTypes
  A mechanism that ensures that the passed value is of the correct daatatype.
  age: PropTypes.number
  It won't stop the application from running, but will display to console.
  Good for debugging.

defaultProps
  Default values for props in case they are not passed from the parent component.
  name: "Guest"
*/

import Student from "./Student/Student"

function App() {
  return(
    <>
      <Student 
        name = "Tom" 
        age={30} 
        isStudent = {true}
      />
      <Student
        name = "John"
        age={42}
        isStudent={false}
      />
      <Student
        name = "Sandra"
        age={38}
        isStudent={true}
      />
      
      {/* default props */}
      <Student />
    </>
  )
}

export default App

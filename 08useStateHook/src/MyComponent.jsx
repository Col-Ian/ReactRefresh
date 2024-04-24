import PropTyeps from 'prop-types'
// In order to use a react hook, import it.
// Import only the useState from the React library
import React, {useState} from 'react'

function MyComponent(){
    // Array destructuring
    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = ()=>{
        // This will trigger a re-render of the virtual DOM.
        setName('Timmothy')
    }

    const updateAge = ()=>{
        setAge(age +1)
    }

    const toggleEmployedStatus = ()=>{
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>
            <p>
                Age: {age}
            </p>
            <button onClick={updateAge}>
                Increment Age
            </button>
            <p>
                Is employed: {isEmployed ? 'Yes' : 'No'}
            </p>
            <button onClick={toggleEmployedStatus}>
                Toggle Status
            </button>
        </div>
    )
}

export default MyComponent
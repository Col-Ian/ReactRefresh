import React, {useState} from 'react'

function MyComponent(){
    const [count, setCount] = useState(0)

    const increment = ()=>{
        /*
            This takes the PENDING state to calculate NEXT state.
            React puts your updater function in a queue.
            During the next render, it will call them in the same order.
            According to react documents, you want to rename count to be something since we're working with the previous state, not the next state.
            Either rename is acceptable.
        */
        setCount(prevCount => prevCount+1)
        setCount(c => c + 1)
    }

    const deccrement = ()=>{
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = ()=>{
        // Updater function not needed as the previous state doesn't matter when setting to a specific value.
        setCount(0)
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>
                Count: {count}
            </p>
            <button className='counter-button' onClick={deccrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent
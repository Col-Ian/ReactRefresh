import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    let [number, setNumber] = useState(0);

    // Creates an object with one property, {current: 0}
    const ref = useRef(0)

    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(()=>{
        console.log('Component Rendered')
        console.log(inputRef) //Render an object of input
    })

    function handleClickState(){
        setNumber(n => n + 1)
    }

    function handleClickRef(){
        ref.current++
        console.log(ref.current)
    }

    function handleInputRef(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'yellow'
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    function handleInputRef2(){
        inputRef2.current.focus()
        inputRef.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = 'yellow'
        inputRef3.current.style.backgroundColor = ''
    }

    function handleInputRef3(){
        inputRef3.current.focus()
        inputRef.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = 'yellow'
    }

    return(
        <>
            <button onClick={handleClickState}>State Variable</button>
            <button onClick={handleClickRef}>Ref Variable</button>
            <br />
            <input ref={inputRef} />
            <button onClick={handleInputRef}>Input Ref</button>
            <br />
            <input ref={inputRef2} />
            <button onClick={handleInputRef2}>Input Ref 2</button>
            <br />
            <input ref={inputRef3} />
            <button onClick={handleInputRef3}>Input Ref 3</button>
            
        </>
    )
}

export default MyComponent
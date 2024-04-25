import React, {useState, useEffect} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    // Run after every re-render
    // useEffect(()=> {
    //     document.title = `Count: ${count}`
    // })

    // When it mounts and when the value changes
    useEffect(()=>{
        document.title = `Count: ${count} ${color}`
    }, [count])

    // Run only on mount
    useEffect(()=>{
        document.title = `Count Program`
    }, [])


    function addCount(){
        setCount(c => c + 1)
    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c=== 'green' ? 'red' : 'green')
    }

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added')

        // When we are done with this component, free up any resources to prevent unexpected behavior.
        return (() => {
            window.removeEventListener('resize', handleResize)
        })
    },[])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>ChangeColor</button>

        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    )
}

export default MyComponent
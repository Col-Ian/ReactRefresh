import PropTypes from 'prop-types'

function Button(){

    const handleClick= (name) =>{
        console.log(`${name} stop clicking me.`)
    }

    let count = 0;
    const handleClick2 = (name)=>{
        if (count < 3){
            count++;
            console.log(`${name}, you clicked me ${count} time/s.`)
        }
        else{
            console.log(`${name}, stop clicking me!`)
        }
    }


    // Event parameter
    const handleEventClick = (e)=>{
        // To view the properties of the event.
        console.log(e)
        // Change a specific component
        e.target.textContent = 'OUCH!';
    }
    return(
        <>
        {/* 
            When you  have a set of () after a callback, you'll invoke it right away.
            To avoid this, wrap the callback within a function, or use an arrow function.
            Instead of:
            <button onClick={handleClick2('Timmothy')}>Click Me</button>
            write:
        */}
            <button onClick={()=> handleClick('Timmothy')}>Click Me</button>
            <br/>
            <button onClick={()=> handleClick2('Timmothy')}>Click Me 2</button>
            <br/>
            <button onDoubleClick={(e)=> handleEventClick(e)}>Double-Click the event</button>
        </>
    )
}

export default Button
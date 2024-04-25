import React, {useState} from 'react'

function MyComponent(){

    // Simply use [] for empty array.
    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f=>[...f, newFood])
    }

    function handleRemoveFood(index){
        // Use _ to indicate that the parameter being passed to the function is ignored/not used.
        setFoods(foods.filter((_, i)=> i !== index))
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index)=> 
                    <li key={index} onClick={()=> handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )

}

export default MyComponent
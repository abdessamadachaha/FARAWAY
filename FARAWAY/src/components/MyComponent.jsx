import { useState } from "react";

function MyComponent() {
    const [range, setRange] = useState(1);
    const [count, setCount] = useState(1);

    const date = new Date("june 21 2026");
    date.setDate(date.getDate() + count);

    function handleRangeChange(event) {
        setRange(event.target.value);
    }

    function handleNumberChange(event) {
        setCount(parseInt(event.target.value));
    }

    function handleMins() {
        setCount(prev => prev - parseInt(range))
    }

    function handlePlus() {
        setCount(prev => prev + parseInt(range))
    }
    
    return (
        <div>
            <label>
                <input
                    type="range"
                    min={1} 
                    max={5} 
                    value={ range } 
                    onChange={ handleRangeChange }
                /> 
                { range }
            </label>

            <div>
                <button onClick={ handleMins }>-</button>
                <input type="number" value={ count } onChange={ handleNumberChange } />
                <button onClick={ handlePlus }>+</button>
            </div>

            <p>{date.toDateString()}</p>
        </div>
    );
}

export default MyComponent;
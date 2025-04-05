import React, { useState } from "react";

function Functional(){
    const [counter, setCounter] = useState(0);

    function Incremental(value){
        if(value === 'inc'){
            const Counter = counter + 1;
            setCounter(Counter);

        }
        else{
            const Counter = counter - 1;
            setCounter(Counter);

        }
    }
    return(
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={()=>Incremental("inc")}>Click +</button>
            <button onClick={()=>Incremental("dec")}>Click -</button>
        </div>
    )
}

export default Functional
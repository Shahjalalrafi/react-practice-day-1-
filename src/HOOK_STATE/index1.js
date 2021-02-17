import React, { useState } from 'react';

function HOOK_STATE() {
    
    const [count, setCount] = useState(0)

    const handleIncreament = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleIncreament}>increament</button>
        </div>
    )
}

export default HOOK_STATE;
import React, { useState } from 'react';

export const ButtonUseState = () =>{
    const [count, setCount] = useState<number>(0);

    return (
        <div className='display-flex'>
            <button onClick={() => setCount(count + 1)}>Mas</button>
            <p>{count}</p>
        </div>
    )
}
import React, { useState } from 'react';

const Change = () => {
    const [change, setChange]= useState('bye');
    return (
        <div>
            <button onClick={()=>setChange('bye')} className="btn btn-danger">bye</button>
            <button onClick={()=>setChange('hi')} className="btn btn-danger">hi</button>
            <button onClick={()=>setChange('hello')} className="btn btn-danger">hello</button>
            {
                change ==="bye" && <p>seee your again</p>
                
            }
            {
                change ==="hello" && <p> your again</p>
                
            }
            {
                change ==="hi" && <p>[hi] your again</p>
                
            }
        </div>
    );
};

export default Change;
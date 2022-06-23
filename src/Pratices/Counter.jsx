import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from './Action';

function CounterP() {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    return (
        <>

            <div>Counter:{count}</div>
            <div>
                <button onClick={() => dispatch(incrementCount())}>Increment</button>
                <button onClick={() => dispatch(decrementCount())}>Decrement</button>
            </div>
        </>
    )
}

export default CounterP
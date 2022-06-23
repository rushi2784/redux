import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCount, decrementTwenty, incrementCount, incrementFive } from './Action';

function CounterP() {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    return (
        <>

            <div>Counter:{count}</div>
            <div>
                <button onClick={() => dispatch(incrementCount())}>Increment</button>
                <button onClick={() => dispatch(decrementCount())}>Decrement</button>
                <button onClick={() => dispatch(incrementFive())}>Pluse Five</button>
                <button onClick={() => dispatch(decrementTwenty())}>Minus Twenty</button>
            </div>
        </>
    )
}

export default CounterP
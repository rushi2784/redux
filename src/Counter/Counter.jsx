import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter } from '../Action/Action';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()
  return (
    <>
      <div>Counter:{count} </div>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>

    </>
  )
}

export default Counter
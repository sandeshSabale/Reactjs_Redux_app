import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { increment, decrement, incrementByAmount } from './features/counter/CounterSlice';
import { increment, decrement, incrementByAmount } from './CounterSlice'; 
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span style={{ margin: '0 15px' }}>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button
        style={{ marginTop: '20px' }}
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 5
      </button>
    </div>
  );
}

export default Counter;

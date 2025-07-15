'use client';
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(" Count changed:", count);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>useEffect Counter Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add +</button>
    </div>
  );
}

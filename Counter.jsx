import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>you clicked {count} times.</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}

export default Counter
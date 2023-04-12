// First, you'll need to import `useState` from React at the top of the file.

import { useState } from "react";
import "./App.css";

//Create a piece of state at the top of your `App` component called `count` with an initial state of `0`. If you need a reminder of how to declare state, check the [docs](https://react.dev/reference/react/useState)! 🍏

// Write a function called `handleCounterClick` that sets the `count` state to one more than its previous value (incrementing it by 1) each time it's called. 🍏

// In the JSX that the `App` component renders, update the h2 with `className='count'` to show the current value of the `count` state. 🍏

// Update the `className="countButton"` to call your `handleCounterClick` function when clicked. 🍏

function App() {
  const [count, setCount] = useState(0);
  function handleCounterClick() {
    setCount(count + 1);
  }
  return (
    <main className="App">
      <h1>React useState</h1>
      <section>
        <h2 className="count">{count}</h2>
        <button onClick={handleCounterClick} className="countButton">
          +1
        </button>
      </section>
      <section>
        <p className="randomBootcamper">BOOTCAMPER NAME</p>
        <button className="randomBootcamperName">
          Click me for a random bootcamper!
        </button>
      </section>
    </main>
  );
}

export default App;

// import css from "./Task.module.css"

// const Task = () => {
//   return (
//     <div>Task</div>
//   )
// }

// export default Task

import { useState } from 'react';

// function Counter() {

//   const [countUp, setCountUp] = useState(0);
//   const [countDown, setCountDown] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCountUp(countUp + 1)}>Clicked {countUp} times</button>

//       <button onClick={() => setCountDown(countDown - 1)}>
//                Clicked {countDown} times
//       </button>
//     </div>
//   );
// };

// export default Counter;

function NewCounter() {
  const [newCount, setNewCount] = useState(0);

  const increment = () => {
    setNewCount(newCount => (newCount < 20 ? newCount + 1 : newCount));
  };
  const decrement = () => {
    setNewCount(newCount => (newCount > -10 ? newCount - 1 : newCount));
  };

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={increment}>+</button>
      <div>{newCount}</div>

      <button onClick={decrement}>-</button>
    </div>
  );
}

export default NewCounter;

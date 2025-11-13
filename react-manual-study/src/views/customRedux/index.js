import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount,
  updateUserName,
} from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>计数器: {count}</h2>
      <div
        style={{
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(reset())}>重置</button>
      </div>
      姓名:{" "}
      <input
        type="text"
        onChange={(e) => dispatch(updateUserName(e.target.value))}
      />
    </div>
  );
}

export default Counter;

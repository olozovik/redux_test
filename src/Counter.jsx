import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/store_slice";

export const Counter = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{value}</p>
      <button type="button" onClick={() => dispatch(decrement(2))}>
        Decrease
      </button>
      <button type="button" onClick={() => dispatch(increment(2))}>
        Increase
      </button>
    </div>
  );
};

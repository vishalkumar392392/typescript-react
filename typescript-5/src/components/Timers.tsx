import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const timerctxt = useTimersContext();
  return (
    <ul>
      {timerctxt.timers.map((timer) => (
        <li>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}

import { UseTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = UseTaskContext();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}

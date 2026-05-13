import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export function UseTaskContext() {
  return useContext(TaskContext);
}

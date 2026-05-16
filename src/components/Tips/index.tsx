import { UseTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = UseTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  //tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo {state.config.longBreakTime}min</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de foco <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo descanso curto <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo descanso longo <b>{state.config.longBreakTime}min</b>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}

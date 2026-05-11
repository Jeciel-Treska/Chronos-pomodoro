import type { TaskModel } from "./TaskModels";

//estado -> componente ->filhos (por props)

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, MainForm
  secondsRemaining: number; //home, CountDown, historico, mainform, button
  formatedSecondsRemaining: string; // titulo, countDown
  activeTask: TaskModel | null; //CountDown, historico, mainform, button
  currentCycle: number; // vai de 1 a 8 (as bolinhas de ciclos)
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};

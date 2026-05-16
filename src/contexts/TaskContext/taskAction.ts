import type { TaskModel } from "../../models/TaskModels";
import type { TaskStateModel } from "../../models/TaskStateModel";

export enum TaskActionsTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.COUNT_DOWN;
      payload: Pick<TaskStateModel, "secondsRemaining">;
    }
  | {
      type: TaskActionsTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    };

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsTypes.RESET_STATE;
    }
  | {
      type: TaskActionsTypes.COMPLETE_TASK;
    };

export type TaskActionsModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;

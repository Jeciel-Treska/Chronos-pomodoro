import { SaveIcon } from "lucide-react";
import { ContainerCompo } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useEffect, useRef } from "react";
import { UseTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskAction";

export function SettingPage() {
  const { state, dispatch } = UseTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Configurações - Chronos Pomodoro";
  }, []);

  function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    const formErrors = [];
    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números para TODOS os campos");
    }

    if (workTime < 1 || workTime > 90) {
      formErrors.push(
        "Digite um tempo entre 1 a 90 minutos (limite 1 hora e 30min por Foco)",
      );
    }

    if (shortBreakTime < 1 || shortBreakTime > 20) {
      formErrors.push("Digite um tempo entre 1 e 20 minutos ");
    }

    if (longBreakTime < 1 || longBreakTime > 55) {
      formErrors.push("Digite um tempo entre 1 e 55 minutos");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }
    dispatch({
      type: TaskActionsTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.success("Configurações salvas!");
  }

  return (
    <MainTemplate>
      <ContainerCompo>
        <Heading>Configurações</Heading>
      </ContainerCompo>

      <ContainerCompo>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Informações abaixo para cada ciclo!
        </p>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Foco -- Descanso curto -- Decanso longo
        </p>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Informar em minutos!
        </p>
      </ContainerCompo>

      <ContainerCompo>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
              maxLength={2}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type="number"
              maxLength={2}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
              maxLength={2}
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar Configurações"
              title="Salvar Configurações"
            />
          </div>
        </form>
      </ContainerCompo>
    </MainTemplate>
  );
}

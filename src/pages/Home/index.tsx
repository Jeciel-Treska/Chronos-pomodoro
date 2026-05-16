import { useEffect } from "react";
import { ContainerCompo } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
  useEffect(() => {
    document.title = "Chronos Pomodoro";
  }, []);
  return (
    <MainTemplate>
      <ContainerCompo>
        <CountDown />
      </ContainerCompo>

      <ContainerCompo>
        <MainForm />
      </ContainerCompo>
    </MainTemplate>
  );
}

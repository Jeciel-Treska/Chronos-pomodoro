import { ContainerCompo } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
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

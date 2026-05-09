import { Heading } from "./components/Heading";
import { ContainerCompo } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <ContainerCompo>
        <Logo />
      </ContainerCompo>

      <ContainerCompo>
        <Heading>Menu</Heading>
      </ContainerCompo>
    </>
  );
}

import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";
import { ContainerCompo } from "./components/Container";

export function App() {
  return (
    <>
      <ContainerCompo>
        <Heading>Logo</Heading>
      </ContainerCompo>
      <ContainerCompo>
        <Heading>Menu</Heading>
      </ContainerCompo>
    </>
  );
}

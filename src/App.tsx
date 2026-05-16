import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MassagesContainer } from "./MesaagesConteiner";
import { MainRouter } from "./routers/MainRouter";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <TaskContextProvider>
      <MassagesContainer>
        <MainRouter />
      </MassagesContainer>
    </TaskContextProvider>
  );
}

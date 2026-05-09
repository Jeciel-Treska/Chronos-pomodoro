import { ContainerCompo } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <ContainerCompo>
        <Logo />
      </ContainerCompo>

      <ContainerCompo>
        <Menu />
      </ContainerCompo>

      <ContainerCompo>
        <CountDown />
      </ContainerCompo>

      <ContainerCompo>
        <form className="form" action="">
          <div className="formRow">
            <label htmlFor="input">Task</label>
            <input id="input" type="text" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </ContainerCompo>
    </>
  );
}

import { ContainerCompo } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <ContainerCompo>
        <Logo />
      </ContainerCompo>

      <ContainerCompo>
        <Menu />
      </ContainerCompo>

      {children}

      <ContainerCompo>
        <Footer />
      </ContainerCompo>
    </>
  );
}

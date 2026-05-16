import type { ToastContentProps } from "react-toastify";
import styles from "./styles.module.css";
import { DefaultButton } from "../DefaultButton";
import { ThumbsUpIcon } from "lucide-react";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label="Confirmar ação e fechar"
            title="Confirmar ação e fechar"
            color="green"
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsUpIcon />}
            aria-label="Cancelar ação"
            title="Cancelar ação"
            color="red"
          />
        </div>
      </div>
    </>
  );
}

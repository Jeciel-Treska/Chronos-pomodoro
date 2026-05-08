import styles from "./styles.module.css";

type ConteinerProps = {
  children: React.ReactNode;
};

export function ContainerCompo({ children }: ConteinerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

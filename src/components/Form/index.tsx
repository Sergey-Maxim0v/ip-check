import { FC } from "react";
import { IForm } from "./types.ts";

import styles from "./styles.module.scss";

const Form: FC<IForm> = ({ ip, setIp, disabled }) => {
  // TODO:
  console.log(ip, !!setIp, disabled);

  return <div className={styles.form}>TODO: form </div>;
};

export default Form;

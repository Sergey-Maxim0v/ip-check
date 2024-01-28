import { FC } from "react";
import { IForm } from "./types.ts";

import styles from "./styles.module.scss";

const Form: FC<IForm> = ({ ip, setIp, isLoading }) => {
  // TODO:
  console.log(ip, !!setIp, isLoading);

  return <div className={styles.form}>TODO: form </div>;
};

export default Form;

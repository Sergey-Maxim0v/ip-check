import { FC, FormEvent, useState } from "react";
import { IForm } from "./types.ts";

import styles from "./styles.module.scss";

const Form: FC<IForm> = ({ ip, setIp, isLoading }) => {
  const [value, setValue] = useState(ip ?? "");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIp(value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="108.177.127.104"
      />

      <button className={styles.button} disabled={isLoading} type="submit">
        {isLoading ? "загрузка" : "проверить"}
      </button>
    </form>
  );
};

export default Form;

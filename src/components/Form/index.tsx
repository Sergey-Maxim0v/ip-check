import { FC, FormEvent, useState } from "react";
import { IForm } from "./types.ts";

import styles from "./styles.module.scss";

const Form: FC<IForm> = ({ ip, setIp, isLoading, isReady }) => {
  const [value, setValue] = useState(ip ?? "");
  const placeholder = ip ?? "108.177.127.104";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIp(value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        disabled={!isReady}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />

      <button
        className={styles.button}
        disabled={!isReady || isLoading}
        type="submit"
      >
        button
      </button>
    </form>
  );
};

export default Form;

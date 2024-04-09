import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";

import styles from "./styles.module.scss";

export interface IForm {
  setIp: Dispatch<SetStateAction<string | undefined>>;
  isLoading: boolean;
  ip?: string;
  isError?: boolean;
}

const Form: FC<IForm> = ({ ip, setIp, isLoading, isError }) => {
  const [value, setValue] = useState(ip ?? "");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIp(value);
  };

  const getPlaceholder = () =>
    isError ? "Connection error" : `108.177.127.104`;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={getPlaceholder()}
        disabled={isError}
      />

      <button
        className={styles.button}
        disabled={isLoading || isError}
        type="submit"
      >
        {isLoading ? "загрузка" : "проверить"}
      </button>
    </form>
  );
};

export default Form;

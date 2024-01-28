import { IInfoElement } from "../../constants/defaultInfo.ts";

import styles from "./styles.module.scss";
const InfoElement = ({ el }: { el: IInfoElement }) => {
  const value = () => {
    switch (el.value) {
      case undefined:
        return "-";
      case false:
        return "false";
      case "":
        return "-";
      default:
        return el.value;
    }
  };

  return (
    <div key={el.name} className={styles.element}>
      <p className={styles.title}>{el.name}</p>
      <p className={styles.value}>{value()}</p>
    </div>
  );
};

export default InfoElement;

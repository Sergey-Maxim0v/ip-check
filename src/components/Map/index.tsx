import { IInfo } from "../../constants/defaultInfo.ts";

import styles from "./styles.module.scss";

const Map = ({ info }: { info: IInfo }) => {
  const coordinates =
    info.latitude.value && info.longitude.value
      ? `${info.latitude.value},${info.longitude.value}`
      : undefined;

  console.log(coordinates);
  return <div className={styles.map}>TODO: Map</div>;
};

export default Map;

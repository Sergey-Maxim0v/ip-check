import { useIpInfo } from "../../hooks/useIpInfo.ts";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import Form from "../Form";
import InfoElement from "../InfoElement";
import Map from "../Map";

const Page = () => {
  const [ip, setIp] = useState<string>();
  const { info, isLoading } = useIpInfo(ip);

  useEffect(() => {
    if (!isLoading && info.ip.value) {
      console.log(info);
    }
  }, [info]);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.form}>
          <Form ip={ip} setIp={setIp} isLoading={isLoading} />
        </div>

        <div className={styles.info}>
          {Object.values(info).map((el) => (
            <InfoElement key={el.name} el={el} />
          ))}
        </div>
      </div>

      <div className={styles.map}>
        <Map info={info} />
      </div>
    </div>
  );
};

export default Page;

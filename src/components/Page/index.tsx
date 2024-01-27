import { useIpInfo } from "../../hooks/useIpInfo.ts";
import { useState } from "react";

import styles from "./styles.module.scss";
import Form from "../Form";

const Page = () => {
  const [ip, setIp] = useState<string>();
  const { info, isLoading, isError } = useIpInfo(ip);

  // TODO:
  console.log(isError, info);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.form}>
          <Form ip={ip} setIp={setIp} disabled={isLoading} />
        </div>

        <div className={styles.loaders}>TODO: loaders</div>

        <div className={styles.info}>
          TODO: <br /> <br />
          {Object.entries(info).map((el) => (
            <p key={el[0]} style={{ marginBottom: "0.5rem" }}>
              {`${el[0]}: ${el[1].value} (${el[1].source})`}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.map}>
        <br />
        TODO: map
        <br />
        <br />
      </div>
    </div>
  );
};

export default Page;

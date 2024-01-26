import { useIpInfo } from "../../hooks/useIpInfo.ts";
import { useState } from "react";

import styles from "./styles.module.scss";

const Page = () => {
  const [ip, setIp] = useState<string>();
  const { info } = useIpInfo(ip);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>
          {/* TODO */}
          input, buttons
        </div>

        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "100%",
            height: "1px",
            backgroundColor: "currentColor",
          }}
        ></div>

        <div>
          {/* TODO */}
          loaders
        </div>

        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "100%",
            height: "1px",
            backgroundColor: "currentColor",
          }}
        ></div>

        <div>
          {/* TODO */}

          {Object.entries(info).map((el) => (
            <p key={el[0]} style={{ marginBottom: "0.5rem" }}>
              {`${el[0]}: ${el[1].value} (${el[1].source})`}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.map}>
        {/* TODO */}
        map
      </div>
    </div>
  );
};

export default Page;

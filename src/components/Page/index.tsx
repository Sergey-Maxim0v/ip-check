import { useIpInfo } from "../../hooks/useIpInfo.ts";
import { useState } from "react";

import styles from "./styles.module.scss";

const Page = () => {
  const [ip, setIp] = useState<string>();
  const { info } = useIpInfo(ip);

  console.log(ip, setIp, info);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>
          {/* TODO */}
          input, buttons
        </div>

        <div>
          {/* TODO */}
          information
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

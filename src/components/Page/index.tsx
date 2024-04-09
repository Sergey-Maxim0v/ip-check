import { useIpInfo } from "../../hooks/useIpInfo.ts";
import { useEffect, useMemo, useState, lazy, Suspense } from "react";

import styles from "./styles.module.scss";
import Form from "../Form";
import InfoElement from "../InfoElement";
import Loader from "../Loader";

const InfoMap = lazy(() => import("../InfoMap"));

const Page = () => {
  const [ip, setIp] = useState<string>();
  const { info, isLoading, isError } = useIpInfo(ip);

  useEffect(() => {
    if (!isLoading && info.ip.value) {
      console.log(info);
    }
  }, [info]);

  const coordinates: [number, number] = useMemo(() => {
    const latitude = Number.isNaN(Number(info.latitude.value))
      ? 0
      : Number(info.latitude.value);
    const longitude = Number.isNaN(Number(info.longitude.value))
      ? 0
      : Number(info.longitude.value);

    return [latitude, longitude];
  }, [info.ip?.value, info.ip?.value]);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.form}>
          <Form ip={ip} setIp={setIp} isLoading={isLoading} isError={isError} />
        </div>

        <div className={styles.info}>
          {Object.values(info).map((el) => (
            <InfoElement key={el.name} el={el} />
          ))}
        </div>
      </div>

      <div className={styles.map}>
        <Suspense fallback={<Loader />}>
          <InfoMap coordinates={coordinates} ip={info.ip.value} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;

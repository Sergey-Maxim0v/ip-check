import { useEffect, useState } from "react";
import { DEFAULT_INFO, IInfo } from "../constants/defaultInfo.ts";
import { infoSetter } from "../components/utils/infoSetter.ts";
import { SOURCE_ENUM } from "../constants/sourceEnum.ts";
import { getIpApiCom } from "../api/getIpApiCom.ts";
import { getIpApiCo } from "../api/getIpApiCo.ts";

export const useIpInfo = (ip?: string) => {
  const [info, setInfo] = useState<IInfo>(DEFAULT_INFO);
  const [isLoadingIpApiCo, setIsLoadingIpApiCo] = useState(false);
  const [isLoadingIpApiCom, setIsLoadingIpApiCom] = useState(false);
  const [isError, setIsError] = useState(false);

  const isLoading = isLoadingIpApiCo && isLoadingIpApiCom;

  useEffect(() => {
    const isLocalHost = window.location.hostname.includes("localhost");

    setInfo(() => DEFAULT_INFO);

    setIsLoadingIpApiCom(true);
    setIsLoadingIpApiCo(true);

    if (isLocalHost) {
      getIpApiCom(ip)
        .then((data) => {
          if (data?.status === "success") {
            infoSetter({ data, setInfo, source: SOURCE_ENUM.ipapicom });
            setIsError(false);
          }
        })
        .catch(() => {
          if (!info.ip.value) {
            setIsError(true);
          }
        })
        .finally(() => {
          setIsLoadingIpApiCom(false);
        });
    }

    getIpApiCo(ip)
      .then((data) => {
        if (data && data.ip) {
          infoSetter({ data, setInfo, source: SOURCE_ENUM.ipapico });
        }
      })
      .catch(() => {
        if (!info.ip.value) {
          setIsError(true);
        }
      })
      .finally(() => {
        setIsLoadingIpApiCo(false);
      });
  }, [ip]);

  return { info, isLoading, isError };
};

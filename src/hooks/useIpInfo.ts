import { useEffect, useState } from "react";
import { DEFAULT_INFO, IInfo } from "../constants/defaultInfo.ts";
import { getLinkIpApiCo } from "../links/getLinkIpApiCo.ts";
import { getLinkIpApiCom } from "../links/getLinkIpApiCom.ts";
import { infoSetter } from "../components/utils/infoSetter.ts";
import { SOURCE_ENUM } from "../constants/sourceEnum.ts";

export const useIpInfo = (ip?: string) => {
  const [info, setInfo] = useState<IInfo>(DEFAULT_INFO);

  useEffect(() => {
    setInfo(() => DEFAULT_INFO);

    fetch(getLinkIpApiCom(ip)).then(function (response) {
      response.json().then((data) => {
        if (data?.status === "success") {
          infoSetter({ data, setInfo, source: SOURCE_ENUM.ipapicom });
        }
      });
    });

    fetch(getLinkIpApiCo(ip)).then(function (response) {
      response.json().then((data) => {
        if (data && data.ip) {
          infoSetter({ data, setInfo, source: SOURCE_ENUM.ipapico });
        }
      });
    });
  }, [ip]);

  return { info };
};

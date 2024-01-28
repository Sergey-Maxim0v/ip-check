import { IInfo, IInfoElement } from "../../constants/defaultInfo.ts";
import { Dispatch, SetStateAction } from "react";
import { SOURCE_ENUM } from "../../constants/sourceEnum.ts";
import { KEY_MAP_IPAPI_CO } from "../../constants/keyMapIpApiCo.ts";
import { KEY_MAP_IP_API_COM } from "../../constants/keyMapIpApiCom.ts";

export const infoSetter = ({
  data,
  setInfo,
  source,
}: {
  data: { [key: string]: string };
  setInfo: Dispatch<SetStateAction<IInfo>>;
  source: SOURCE_ENUM;
}): void => {
  const getKeyMap = () => {
    switch (source) {
      case SOURCE_ENUM.ipapico:
        return KEY_MAP_IPAPI_CO;
      case SOURCE_ENUM.ipapicom:
        return KEY_MAP_IP_API_COM;
    }
  };

  setInfo((prev) => {
    const setterElement = (key: string): IInfoElement => {
      const dataMap = getKeyMap();
      const dataKey = dataMap[key];

      if (prev[key].value !== undefined) {
        return { ...prev[key], [source]: data[dataKey] };
      }

      if (data[dataKey] === undefined) {
        return { ...prev[key] };
      }

      return {
        ...prev[key],
        value: data[dataKey],
        source: source,
        [source]: data[dataKey],
      };
    };

    return Object.keys(prev).reduce(
      (acc: IInfo, el) => ({ ...acc, [el]: setterElement(el) }),
      {},
    );
  });
};

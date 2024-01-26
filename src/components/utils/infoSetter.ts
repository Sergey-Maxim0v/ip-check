import { IInfo, IInfoElement } from "../../constants/defaultInfo.ts";
import { Dispatch, SetStateAction } from "react";
import { SOURCE_ENUM } from "../../constants/sourceEnum.ts";

export const infoSetter = ({
  data,
  setInfo,
  source,
}: {
  data: { [key: string]: string };
  setInfo: Dispatch<SetStateAction<IInfo>>;
  source: SOURCE_ENUM;
}): void => {
  setInfo((prev) => {
    const setterElement = (key: string): IInfoElement => {
      if (prev[key].value !== undefined) {
        return { ...prev[key], [source]: data[key] };
      }

      // TODO: key
      return {
        ...prev[key],
        value: data[key],
        source: source,
        description: prev[key].description,
        [source]: data[key],
      };
    };

    return Object.keys(prev).reduce(
      (acc: IInfo, el) => ({ ...acc, [el]: setterElement(el) }),
      {},
    );
  });
};

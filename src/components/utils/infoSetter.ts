import { IInfo, IInfoElement } from "../../constants/defaultInfo.ts";
import { Dispatch, SetStateAction } from "react";

export const infoSetter = ({
  data,
  setInfo,
  source,
}: {
  data: { [key: string]: string };
  setInfo: Dispatch<SetStateAction<IInfo>>;
  source: string;
}): void => {
  setInfo((prev) => {
    const setterElement = (key: string): IInfoElement => {
      if (prev[key].value !== undefined) {
        return prev[key];
      }

      // TODO: key
      return {
        value: data[key],
        source: source,
        description: prev[key].description,
      };
    };

    return Object.keys(prev).reduce(
      (acc: IInfo, el) => ({ ...acc, [el]: setterElement(el) }),
      {},
    );
  });
};

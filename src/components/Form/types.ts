import { Dispatch, SetStateAction } from "react";

export interface IForm {
  ip?: string;
  setIp: Dispatch<SetStateAction<string | undefined>>;
  disabled: boolean;
}

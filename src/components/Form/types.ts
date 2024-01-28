import { Dispatch, SetStateAction } from "react";

export interface IForm {
  setIp: Dispatch<SetStateAction<string | undefined>>;
  isLoading: boolean;
  ip?: string;
}

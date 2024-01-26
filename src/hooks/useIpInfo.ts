import { useEffect, useState } from "react";
import { DEFAULT_INFO } from "../constants/defaultInfo.ts";

export const useIpInfo = (ip?: string) => {
  const [info, setInfo] = useState(DEFAULT_INFO);

  useEffect(() => {
    // TODO
    setInfo(() => DEFAULT_INFO);
  }, [ip]);

  return { info };
};

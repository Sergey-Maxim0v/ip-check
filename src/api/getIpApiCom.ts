import { getLinkIpApiCom } from "./links/getLinkIpApiCom.ts";

export const getIpApiCom = async (ip?: string) =>
  await fetch(getLinkIpApiCom(ip)).then((response) => response.json());

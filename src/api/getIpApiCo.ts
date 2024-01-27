import { getLinkIpApiCo } from "./links/getLinkIpApiCo.ts";

export const getIpApiCo = async (ip?: string) =>
  await fetch(getLinkIpApiCo(ip)).then((response) => response.json());

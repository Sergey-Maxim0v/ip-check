export const getLinkIpApiCo = (ip?: string): string =>
  ip ? "https://ipapi.co/${ip}/json/" : "https://ipapi.co/json";

export const getLinkIpApiCom = (ip?: string) =>
  `http://ip-api.com/json/${ip}?fields=status,message,continent,` +
  `continentCode,country,countryCode,region,regionName,city,district,` +
  `zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,` +
  `proxy,hosting,query`;

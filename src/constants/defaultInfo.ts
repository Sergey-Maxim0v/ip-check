import { SOURCE_ENUM } from "./sourceEnum.ts";

export interface IInfo {
  [key: string]: IInfoElement;
}

export interface IInfoElement {
  name: string;
  description: string;
  value?: string | boolean;
  source?: SOURCE_ENUM;
  [SOURCE_ENUM.ipapico]?: string;
  [SOURCE_ENUM.ipapicom]?: string;
}

export const DEFAULT_INFO: IInfo = {
  ip: {
    name: "IP",
    value: undefined,
    source: undefined,
    description: "public (external) IP address (same as URL ip)",
  },
  network: {
    name: "Сеть",
    value: undefined,
    source: undefined,
    description: "network",
  },
  version: {
    name: "Версия IP",
    value: undefined,
    source: undefined,
    description: "IP version",
  },
  latitude: {
    name: "Широта",
    value: undefined,
    source: undefined,
    description: "latitude",
  },
  longitude: {
    name: "Долгота",
    value: undefined,
    source: undefined,
    description: "longitude",
  },
  city: {
    name: "Город",
    value: undefined,
    source: undefined,
    description: "city name",
  },
  district: {
    name: "Район",
    value: undefined,
    source: undefined,
    description: "District (subdivision of city)",
  },
  region: {
    name: "Регион",
    value: undefined,
    source: undefined,
    description: "region name (administrative division)",
  },
  region_code: {
    name: "Код региона",
    value: undefined,
    source: undefined,
    description: "country code (2 letter, ISO 3166-1 alpha-2)",
  },
  country_name: {
    name: "Страна",
    value: undefined,
    source: undefined,
    description: "short country name",
  },
  country_code: {
    name: "Код страны",
    value: undefined,
    source: undefined,
    description: "country code (2 letter, ISO 3166-1 alpha-2)",
  },
  country_code_iso3: {
    name: "iso3 код страны",
    value: undefined,
    source: undefined,
    description: "country code (3 letter, ISO 3166-1 alpha-3)",
  },
  country_capital: {
    name: "Столица",
    value: undefined,
    source: undefined,
    description: "capital of the country",
  },
  country_tld: {
    name: "TLD страны",
    value: undefined,
    source: undefined,
    description: "country specific TLD (top-level domain)",
  },
  country_calling_code: {
    name: "телефонный код страны",
    value: undefined,
    source: undefined,
    description: "country calling code (dial in code, comma separated)",
  },
  country_area: {
    name: "Площадь страны",
    value: undefined,
    source: undefined,
    description: "area of the country (in sq km)",
  },
  country_population: {
    name: "Население страны",
    value: undefined,
    source: undefined,
    description: "population of the country",
  },
  currency: {
    name: "Код валюты страны",
    value: undefined,
    source: undefined,
    description: "currency code (ISO 4217)",
  },
  currency_name: {
    name: "Валюта страны",
    value: undefined,
    source: undefined,
    description: "currency name",
  },
  in_eu: {
    name: "Страна ЕС",
    value: undefined,
    source: undefined,
    description:
      "whether IP address belongs to a country that is a member " +
      "of the European Union (EU)",
  },
  continent_name: {
    name: "Континент",
    value: undefined,
    source: undefined,
    description: "Continent name",
  },
  continent_code: {
    name: "Код континента",
    value: undefined,
    source: undefined,
    description: "Two-letter continent code",
  },
  timezone: {
    name: "Часовой пояс",
    value: undefined,
    source: undefined,
    description: "timezone (IANA format i.e. “Area/Location”)",
  },
  offset: {
    name: "Смещение часового пояса",
    value: undefined,
    source: undefined,
    description: "Timezone UTC DST offset in seconds",
  },
  utc_offset: {
    name: "UTC смещение часового пояса",
    value: undefined,
    source: undefined,
    description:
      "UTC offset (with daylight saving time) as +HHMM or -HHMM " +
      "(HH is hours, MM is minutes)",
  },
  postal: {
    name: "Почтовый индекс",
    value: undefined,
    source: undefined,
    description: "postal code / zip code",
  },
  languages: {
    name: "Языки страны",
    value: undefined,
    source: undefined,
    description:
      "languages spoken (comma separated 2 or 3 letter ISO 639 code " +
      "with optional hyphen separated country suffix)",
  },
  org: {
    name: "Организация",
    value: undefined,
    source: undefined,
    description: "organization name",
  },
  isp: {
    name: "ISP",
    value: undefined,
    source: undefined,
    description: "ISP name",
  },
  as: {
    name: "AS номер и организация",
    value: undefined,
    source: undefined,
    description:
      "AS number and organization, separated by space (RIR). " +
      "Empty for IP blocks not being announced in BGP tables.",
  },
  asname: {
    name: "AS имя",
    value: undefined,
    source: undefined,
    description:
      "AS name (RIR). Empty for IP blocks not being announced in BGP tables.",
  },
  reverse: {
    name: "Обратный DNS IP",
    value: undefined,
    source: undefined,
    description: "Reverse DNS of the IP (can delay response)",
  },
  asn: {
    name: "Номер автономной системы",
    value: undefined,
    source: undefined,
    description: "autonomous system number",
  },
  hostname: {
    name: "Имя хоста",
    value: undefined,
    source: undefined,
    description: "host or domain name associated with the IP",
  },
  mobile: {
    name: "Мобильная связь",
    value: undefined,
    source: undefined,
    description: "Mobile (cellular) connection",
  },
  proxy: {
    name: "Прокси",
    value: undefined,
    source: undefined,
    description: "Proxy, VPN or Tor exit address",
  },
  hosting: {
    name: "Хостинг",
    value: undefined,
    source: undefined,
    description: "Hosting, colocated or data center",
  },
};

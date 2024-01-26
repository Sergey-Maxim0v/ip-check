export interface IInfo {
  [key: string]: IInfoElement;
}

export interface IInfoElement {
  value?: string;
  source?: string;
  description: string;
}

export const DEFAULT_INFO: IInfo = {
  ip: {
    value: undefined,
    source: undefined,
    description: "public (external) IP address (same as URL ip)",
  },
  city: {
    value: undefined,
    source: undefined,
    description: "city name",
  },
  region: {
    value: undefined,
    source: undefined,
    description: "region name (administrative division)",
  },
  region_code: {
    value: undefined,
    source: undefined,
    description: "country code (2 letter, ISO 3166-1 alpha-2)",
  },
  country: {
    value: undefined,
    source: undefined,
    description: "country code (2 letter, ISO 3166-1 alpha-2)",
  },
  country_code: {
    value: undefined,
    source: undefined,
    description: "country code (2 letter, ISO 3166-1 alpha-2)",
  },
  country_code_iso3: {
    value: undefined,
    source: undefined,
    description: "country code (3 letter, ISO 3166-1 alpha-3)",
  },
  country_name: {
    value: undefined,
    source: undefined,
    description: "short country name",
  },
  country_capital: {
    value: undefined,
    source: undefined,
    description: "capital of the country",
  },
  country_tld: {
    value: undefined,
    source: undefined,
    description: "country specific TLD (top-level domain)",
  },
  country_area: {
    value: undefined,
    source: undefined,
    description: "area of the country (in sq km)",
  },
  country_population: {
    value: undefined,
    source: undefined,
    description: "population of the country",
  },
  continent_code: {
    value: undefined,
    source: undefined,
    description: "Two-letter continent code",
  },
  in_eu: {
    value: undefined,
    source: undefined,
    description:
      "whether IP address belongs to a country that is a member " +
      "of the European Union (EU)",
  },
  postal: {
    value: undefined,
    source: undefined,
    description: "postal code / zip code",
  },
  district: {
    value: undefined,
    source: undefined,
    description: "District (subdivision of city)",
  },
  latitude: {
    value: undefined,
    source: undefined,
    description: "latitude",
  },
  longitude: {
    value: undefined,
    source: undefined,
    description: "longitude",
  },
  latlong: {
    value: undefined,
    source: undefined,
    description: "comma separated latitude and longitude",
  },
  timezone: {
    value: undefined,
    source: undefined,
    description: "timezone (IANA format i.e. “Area/Location”)",
  },
  offset: {
    value: undefined,
    source: undefined,
    description: "Timezone UTC DST offset in seconds",
  },
  utc_offset: {
    value: undefined,
    source: undefined,
    description:
      "UTC offset (with daylight saving time) as +HHMM or -HHMM " +
      "(HH is hours, MM is minutes)",
  },
  country_calling_code: {
    value: undefined,
    source: undefined,
    description: "country calling code (dial in code, comma separated)",
  },
  currency: {
    value: undefined,
    source: undefined,
    description: "currency code (ISO 4217)",
  },
  currency_name: {
    value: undefined,
    source: undefined,
    description: "currency name",
  },
  languages: {
    value: undefined,
    source: undefined,
    description:
      "languages spoken (comma separated 2 or 3 letter ISO 639 code " +
      "with optional hyphen separated country suffix)",
  },
  isp: {
    value: undefined,
    source: undefined,
    description: "ISP name",
  },
  as: {
    value: undefined,
    source: undefined,
    description:
      "AS number and organization, separated by space (RIR). " +
      "Empty for IP blocks not being announced in BGP tables.",
  },
  asname: {
    value: undefined,
    source: undefined,
    description:
      "AS name (RIR). Empty for IP blocks not being announced in BGP tables.",
  },
  reverse: {
    value: undefined,
    source: undefined,
    description: "Reverse DNS of the IP (can delay response)",
  },
  asn: {
    value: undefined,
    source: undefined,
    description: "autonomous system number",
  },
  org: {
    value: undefined,
    source: undefined,
    description: "organization name",
  },
  hostname: {
    value: undefined,
    source: undefined,
    description:
      "host or domain name associated with the IP (*optional beta add-on, " +
      "please contact us for details)",
  },
  mobile: {
    value: undefined,
    source: undefined,
    description: "Mobile (cellular) connection",
  },
  proxy: {
    value: undefined,
    source: undefined,
    description: "Proxy, VPN or Tor exit address",
  },
  hosting: {
    value: undefined,
    source: undefined,
    description: "Hosting, colocated or data center",
  },
};

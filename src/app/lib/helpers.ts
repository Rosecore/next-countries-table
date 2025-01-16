import { Country, CountrySchema, Nullable } from "./types";

export const transformBackendCountryData = (
  backendData: CountrySchema[]
): Country[] => {
  return backendData.map(item => ({
    flagUrl: transformUrl(item.flag_url),
    nameRu: item.name_ru,
    isoCode2: item.iso_code2,
    isoCode3: item.iso_code3,
  }));
};

const transformUrl = (url: string): Nullable<string> => {
  if (url) {
    return "https:" + url;
  }
  return null;
};

export const debounce = (
  fn: (...args: unknown[]) => void,
  ms = 300
): ((...args: unknown[]) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

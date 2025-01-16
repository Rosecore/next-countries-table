export type CountrySchema = {
  flag_url: string;
  name_ru: string;
  iso_code2: string;
  iso_code3: string;
};

export type Country = {
  flagUrl: Nullable<string>;
  nameRu: string;
  isoCode2: string;
  isoCode3: string;
};

export type Nullable<T> = T | null;

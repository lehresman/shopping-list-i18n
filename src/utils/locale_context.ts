import React from 'react';
import { CurrencySymbolPosition } from "./constants";

export interface ILocaleSettings {
  locale: string,
  currency: string,
  currencySymbolPosition: CurrencySymbolPosition;
  dateFormat: string;
  numberFormat: string;
}

export interface ILocaleContext {
  localeSettings: ILocaleSettings;
  setLocaleSettings: (locale: ILocaleSettings) => any;
}

export const LocaleContext = React.createContext<ILocaleContext>({
  localeSettings: {
    locale: 'en-US',
    currency: 'USD',
    currencySymbolPosition: 'before',
    dateFormat: 'MMM D YYYY',
    numberFormat: 'COMMA_DOT',
  },
  setLocaleSettings: () => {},
});

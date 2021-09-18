export interface ICurrency {
  label: string;
  symbol: string;
  decimals: number;
}

export interface INumberFormat {
  separatorStr: string;
  fractionStr: string;
}

export type CurrencySymbolPosition = 'before' | 'after';

export interface ILocale {
  label: string,
  locale: string;
}



export const CURRENCIES: {[key: string]: ICurrency} = {
  USD: {label: 'USD - $', symbol: '$', decimals: 2},
  CAD: {label: 'CAD - $', symbol: '$', decimals: 2},
  EUR: {label: 'EUR - €', symbol: '€', decimals: 2},
  GBP: {label: 'GBP - £', symbol: '£', decimals: 2},
  JPY: {label: 'JPY - ¥', symbol: '¥', decimals: 0},
}

export const DATE_FORMATS: string[] = [
  'MMM D, YYYY',
  'D MMM YYYY',
  'YYYY年M月D日'
];

export const NUMBER_FORMATS: {[key: string]: INumberFormat} = {
  COMMA_DOT: {separatorStr: ',', fractionStr: '.'},
  DOT_COMMA: {separatorStr: '.', fractionStr: ','},
  SPACE_COMMA: {separatorStr: ' ', fractionStr: ','},
};

export const LOCALES: {[key: string]: ILocale} = {
  'en-US': {
    label: 'English (United States)',
    locale: 'en-US',
  },
  'fr-CA': {
    label: 'Français (Canada)',
    locale: 'fr-CA',
  },
  'ja-JP': {
    label: '日本語（日本）',
    locale: 'ja-JP',
  },
};

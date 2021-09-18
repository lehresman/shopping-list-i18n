import React from 'react';

export interface ICurrency {
  label: string;
  symbol: string;
  decimals: number;
}

export interface INumberFormat {
  separatorStr: string;
  fractionStr: string;
}

export interface ILocale {
  label: string,
  language: string;
  region: string;
  numberFormat: INumberFormat;
  dateFormat: string;
  currencySymbolPosition: 'before' | 'after';
}

export interface ILocaleContext {
  locale: string,
  currency: string,
  setLocale: (locale: string) => any;
  setCurrency: (currency: string) => any;
}

export const CURRENCIES: {[key: string]: ICurrency} = {
  USD: {label: 'USD - $', symbol: '$', decimals: 2},
  CAD: {label: 'CAD - $', symbol: '$', decimals: 2},
  EUR: {label: 'EUR - €', symbol: '€', decimals: 2},
  GBP: {label: 'GBP - £', symbol: '£', decimals: 2},
  JPY: {label: 'JPY - ¥', symbol: '¥', decimals: 0},
}

export const LOCALES: {[key: string]: ILocale} = {
  'en-US': {
    label: 'English (United States)',
    language: 'en',
    region: 'US',
    numberFormat: {separatorStr: ',', fractionStr: '.'},
    dateFormat: 'MMM D, YYYY',
    currencySymbolPosition: 'before',
  },
  'en-GB': {
    label: 'English (Great Britain)',
    language: 'en',
    region: 'GB',
    numberFormat: {separatorStr: ',', fractionStr: '.'},
    dateFormat: 'D MMM YYYY',
    currencySymbolPosition: 'before',
  },
  'fr-CA': {
    label: 'Français (Canada)',
    language: 'fr',
    region: 'CA',
    numberFormat: {separatorStr: '.', fractionStr: ','},
    dateFormat: 'D MMM YYYY',
    currencySymbolPosition: 'after',
  },
  'ja-JP': {
    label: '日本語（日本）',
    language: 'ja',
    region: 'JP',
    numberFormat: {separatorStr: ',', fractionStr: '.'},
    dateFormat: 'YYYY年M月D日',
    currencySymbolPosition: 'before',
  },
}

export const LocaleContext = React.createContext<ILocaleContext>({
  locale: 'en-US',
  currency: 'USD',
  setLocale: (locale) => {},
  setCurrency: (currency) => {},
});

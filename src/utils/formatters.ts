import { CURRENCIES, LOCALES } from "./i18n";
import dayjs from "dayjs";

export function formatDate(date: Date, localeStr: string): string {
  const locale = LOCALES[localeStr];
  return dayjs(date).format(locale.dateFormat);
}

export function formatNumber(value: number, localeStr: string, minimumFractionDigits?: number) {
  const locale = LOCALES[localeStr];
  let valueStr: string;
  if (typeof minimumFractionDigits === 'number') {
    valueStr = `${(Math.round(value * Math.pow(10, minimumFractionDigits)) / Math.pow(10, minimumFractionDigits)).toFixed(minimumFractionDigits)}`;
  } else {
    valueStr = `${value}`;
  }
  let parts = valueStr.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, locale.numberFormat.separatorStr);
  return parts.join(locale.numberFormat.fractionStr);
}

export function formatCurrency(amount: number, currencyStr: string, localeStr: string): string {
  const format = CURRENCIES[currencyStr];
  const locale = LOCALES[localeStr];
  let str = formatNumber(amount / Math.pow(10, format.decimals), localeStr, format.decimals);
  if (locale.currencySymbolPosition === 'before') str = `${format.symbol}${str}`;
  if (locale.currencySymbolPosition === 'after') str = `${str}${format.symbol}`;
  return str;
}

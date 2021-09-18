import dayjs from "dayjs";
import { CURRENCIES, NUMBER_FORMATS } from "./constants";
import { ILocaleSettings } from "./locale_context";

export function formatDate(date: Date, localeSettings: ILocaleSettings): string {
  return dayjs(date).format(localeSettings.dateFormat);
}

export function formatNumber(value: number, localeSettings: ILocaleSettings, minimumFractionDigits?: number) {
  const format = NUMBER_FORMATS[localeSettings.numberFormat];
  let valueStr: string;
  if (typeof minimumFractionDigits === 'number') {
    valueStr = `${(Math.round(value * Math.pow(10, minimumFractionDigits)) / Math.pow(10, minimumFractionDigits)).toFixed(minimumFractionDigits)}`;
  } else {
    valueStr = `${value}`;
  }
  let parts = valueStr.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, format.separatorStr);
  return parts.join(format.fractionStr);
}

export function formatCurrency(amount: number, localeSettings: ILocaleSettings): string {
  const format = CURRENCIES[localeSettings.currency];
  let str = formatNumber(amount / Math.pow(10, format.decimals), localeSettings, format.decimals);
  if (localeSettings.currencySymbolPosition === 'before') str = `${format.symbol}${str}`;
  if (localeSettings.currencySymbolPosition === 'after') str = `${str}${format.symbol}`;
  return str;
}

export function parseCurrency(str: string, localeSettings: ILocaleSettings): number {
  let cost: number = parseFloat(str);
  if (!cost) throw new Error("A numeric cost is required.");
  const format = CURRENCIES[localeSettings.currency];
  return Math.round(cost * Math.pow(10, format.decimals));
}

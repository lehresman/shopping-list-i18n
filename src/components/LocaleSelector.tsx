import React from 'react';
import './LocaleSelector.css';
import { LocaleContext } from "../utils/locale_context";
import { CURRENCIES, CurrencySymbolPosition, DATE_FORMATS, LOCALES, NUMBER_FORMATS } from "../utils/constants";
import { formatCurrency, formatNumber } from "../utils/formatters";
import dayjs from "dayjs";
import { MSG_currency, MSG_currencySymbolPosition, MSG_dateFormat, MSG_language, MSG_numberFormat } from "../strings";
import { IntlContext } from "react-intl";

export function LocaleSelector() {
  const {localeSettings, setLocaleSettings} = React.useContext(LocaleContext);
  const {formatMessage} = React.useContext(IntlContext);

  return (
    <div className="locale-selector">
      <div>
        <div className="form-group">
          <label>{formatMessage(MSG_language)}</label>
          <select value={localeSettings.locale}
                  className="form-control"
                  onChange={e => setLocaleSettings({...localeSettings, locale: e.currentTarget.value})}>
            {Object.keys(LOCALES).map(l =>
              <option value={l} key={l}>{LOCALES[l].label}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>{formatMessage(MSG_currency)}</label>
          <select value={localeSettings.currency}
                  className="form-control"
                  onChange={e => setLocaleSettings({...localeSettings, currency: e.currentTarget.value})}>
            {Object.keys(CURRENCIES).map(c =>
              <option value={c} key={c}>{CURRENCIES[c].label}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>{formatMessage(MSG_currencySymbolPosition)}</label>
          <select value={localeSettings.currencySymbolPosition}
                  className="form-control"
                  onChange={e => setLocaleSettings({...localeSettings, currencySymbolPosition: e.currentTarget.value as CurrencySymbolPosition})}>
            <option value="before">{formatCurrency(100000, {...localeSettings, currencySymbolPosition: 'before'})}</option>)
            <option value="after">{formatCurrency(100000, {...localeSettings, currencySymbolPosition: 'after'})}</option>)
          </select>
        </div>
      </div>

      <div>
        <div className="form-group">
          <label>{formatMessage(MSG_dateFormat)}</label>
          <select value={localeSettings.dateFormat}
                  className="form-control"
                  onChange={e => setLocaleSettings({...localeSettings, dateFormat: e.currentTarget.value})}>
            {DATE_FORMATS.map(formatStr =>
              <option value={formatStr} key={formatStr}>{dayjs().format(formatStr)}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>{formatMessage(MSG_numberFormat)}</label>
          <select value={localeSettings.numberFormat}
                  className="form-control"
                  onChange={e => setLocaleSettings({...localeSettings, numberFormat: e.currentTarget.value})}>
            {Object.keys(NUMBER_FORMATS).map(key =>
              <option value={key} key={key}>{formatNumber(5555.555, {...localeSettings, numberFormat: key})}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

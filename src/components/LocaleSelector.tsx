import React from 'react';
import { CURRENCIES, LocaleContext, LOCALES } from "../utils/i18n";
import './LocaleSelector.css';

function LocaleSelector() {
  const {locale, setLocale, currency, setCurrency} = React.useContext(LocaleContext);

  return (
    <div className="locale-selector">
      <select value={locale}
              onChange={e => setLocale(e.currentTarget.value)}>
        {Object.keys(LOCALES).map(l =>
          <option value={l} key={l}>{LOCALES[l].label}</option>)}
      </select>
      <select value={currency}
              onChange={e => setCurrency(e.currentTarget.value)}>
        {Object.keys(CURRENCIES).map(c =>
          <option value={c} key={c}>{CURRENCIES[c].label}</option>)}
      </select>
    </div>
  );
}

export {LocaleSelector};

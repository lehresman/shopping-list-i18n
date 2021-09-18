import React from 'react';
import { ShoppingList } from "./ShoppingList";
import { IntlProvider } from "react-intl";
import { IItem, ItemsContext } from "../utils/items_context";
import { ILocaleSettings, LocaleContext } from "../utils/locale_context";

const messages: {[key: string]: {[key: string]: string}} = {
  'fr-CA': require('../locales/fr-CA.json'),
  'ja-JP': require('../locales/ja-JP.json'),
};

let nextId = 1;

function App() {
  const [items, setItems] = React.useState<IItem[]>([]);
  const [localeSettings, setLocaleSettings] = React.useState<ILocaleSettings>({
    locale: 'en-US',
    currency: 'USD',
    currencySymbolPosition: 'before',
    dateFormat: 'MMM D YYYY',
    numberFormat: 'COMMA_DOT',
  });

  function addItem(note: string, cost: number) {
    setItems([...items, {id: nextId++, note, cost, completed: false, completedOn: null}]);
  }

  function removeItem(id: number) {
    setItems(items.filter(item => item.id !== id));
  }

  function setItemComplete(id: number, val: boolean) {
    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex >= 0) {
      const item = items[itemIndex];
      item.completed = val;
      if (val) {
        item.completedOn = new Date(2021, 9, 25, 8, 0);
      } else {
        item.completedOn = null;
      }
      setItems([
        ...items.slice(0, itemIndex),
        item,
        ...items.slice(itemIndex + 1)
      ]);
    }
  }

  function resetItems() {
    setItems([]);
  }

  return (
    <ItemsContext.Provider value={{items, addItem, removeItem, setItemComplete, resetItems}}>
      <LocaleContext.Provider value={{localeSettings, setLocaleSettings}}>
        <IntlProvider locale={localeSettings.locale}
                      defaultLocale="en-US"
                      messages={messages[localeSettings.locale]}>
          <ShoppingList/>
        </IntlProvider>
      </LocaleContext.Provider>
    </ItemsContext.Provider>
  );
}

export {App};

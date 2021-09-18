import React from 'react';
import { TodoList } from "./TodoList";
import { IntlProvider } from "react-intl";
import { IItem, ItemsContext } from "../utils/items_context";
import { ILocaleSettings, LocaleContext } from "../utils/locale_context";

const messages: {[key: string]: {[key: string]: string}} = {
  'fr-CA': {
    'd6e1b0a4-9643-4b38-9523-416208f0bd5b': 'Ma liste de courses',
    '6111e074-8ae5-4a24-b446-878c00b10958': 'Ajouter un item',
    '52a19774-7f56-4365-814a-d0500e839e04': 'Terminé le {date}',
    '134071e3-ac8c-4eeb-96d5-a7755e4098a0': 'Article',
    '09262c8b-e632-42d0-a86d-b8ca80e73c2b': 'Coût',
    'a02f17a5-ee03-4957-8560-309f354cb897': 'Langue',
    'acf4fbcc-b571-4f73-8a8f-e3fb0ca7485b': 'Monnaie',
    'bd0ab78f-300a-4793-95ce-5c072e1bf13c': 'Position du symbole',
    '0676c26c-33ea-4444-9a4f-00cb79d29d78': 'Format de date',
    '99f6e415-aed1-43f0-bfe1-a22e9a10584d': 'Format de nombre',
  },
  'ja-JP': {
    'd6e1b0a4-9643-4b38-9523-416208f0bd5b': '私の買い物リスト',
    '6111e074-8ae5-4a24-b446-878c00b10958': 'アイテムを追加',
    '52a19774-7f56-4365-814a-d0500e839e04': '{date}に完了',
    '134071e3-ac8c-4eeb-96d5-a7755e4098a0': 'アイテム',
    '09262c8b-e632-42d0-a86d-b8ca80e73c2b': '費用',
    'a02f17a5-ee03-4957-8560-309f354cb897': '言語',
    'acf4fbcc-b571-4f73-8a8f-e3fb0ca7485b': '通貨',
    'bd0ab78f-300a-4793-95ce-5c072e1bf13c': 'シンボル位置',
    '0676c26c-33ea-4444-9a4f-00cb79d29d78': '日付形式',
    '99f6e415-aed1-43f0-bfe1-a22e9a10584d': '数値形式',
  },
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
        item.completedOn = new Date();
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
          <TodoList/>
        </IntlProvider>
      </LocaleContext.Provider>
    </ItemsContext.Provider>
  );
}

export {App};

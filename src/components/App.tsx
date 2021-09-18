import React from 'react';
import { LocaleContext, LOCALES } from '../utils/i18n';
import { TodoList } from "./TodoList";
import { IntlProvider } from "react-intl";
import { IItem, ItemsContext } from "../utils/items";

const messages: {[key: string]: {[key: string]: string}} = {
  'fr': {
    'd6e1b0a4-9643-4b38-9523-416208f0bd5b': 'Ma liste de courses',
    '6111e074-8ae5-4a24-b446-878c00b10958': 'Ajouter un item',
    '52a19774-7f56-4365-814a-d0500e839e04': 'Terminé le {date}',
    '134071e3-ac8c-4eeb-96d5-a7755e4098a0': 'Article',
    '09262c8b-e632-42d0-a86d-b8ca80e73c2b': 'Coût',
  },
  'ja': {
    'd6e1b0a4-9643-4b38-9523-416208f0bd5b': '私の買い物リスト',
    '6111e074-8ae5-4a24-b446-878c00b10958': 'アイテムを追加',
    '52a19774-7f56-4365-814a-d0500e839e04': '{date}に完了',
    '134071e3-ac8c-4eeb-96d5-a7755e4098a0': 'アイテム',
    '09262c8b-e632-42d0-a86d-b8ca80e73c2b': '費用',
  },
};

let nextId = 1;

function App() {
  const [locale, setLocale] = React.useState<string>('en-US');
  const [currency, setCurrency] = React.useState<string>('USD');
  const [items, setItems] = React.useState<IItem[]>([]);

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

  const language = LOCALES[locale].language;

  return (
    <ItemsContext.Provider value={{items, addItem, removeItem, setItemComplete, resetItems}}>
      <LocaleContext.Provider value={{locale, currency, setLocale, setCurrency}}>
        <IntlProvider locale={language}
                      defaultLocale="en"
                      messages={messages[language]}>
          <TodoList/>
        </IntlProvider>
      </LocaleContext.Provider>
    </ItemsContext.Provider>
  );
}

export {App};

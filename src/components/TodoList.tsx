import React from 'react';
import { IntlContext } from 'react-intl';
import { MSG_welcomeMessage } from "../strings";
import { AddItemInput } from "./AddItemInput";
import { ListItem } from "./ListItem";
import "./TodoList.css";
import { LocaleSelector } from "./LocaleSelector";
import { ItemsContext } from "../utils/items_context";

function TodoList() {
  const {formatMessage} = React.useContext(IntlContext);
  const {items} = React.useContext(ItemsContext);

  return (
    <div className="todo-list-container">
      <h1>{formatMessage(MSG_welcomeMessage)}</h1>

      <LocaleSelector/>

      <AddItemInput/>

      <div className="list-container">
        {items.map(item => <ListItem key={item.id} item={item}/>)}
      </div>
    </div>
  );
}

export {TodoList};

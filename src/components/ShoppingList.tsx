import React from 'react';
import { IntlContext } from 'react-intl';
import { MSG_welcomeMessage } from "../strings";
import { AddItemInput } from "./AddItemInput";
import { ListItem } from "./ListItem";
import "./ShoppingList.css";
import { LocaleSelector } from "./LocaleSelector";
import { ItemsContext } from "../utils/items_context";

function ShoppingList() {
  const {formatMessage} = React.useContext(IntlContext);
  const {items} = React.useContext(ItemsContext);

  return (
    <div className="shopping-list-container">
      <h1>{formatMessage(MSG_welcomeMessage)}</h1>

      {/*
        <h1>
          <FormattedMessage
            id="e515e30e-9d58-4b38-8806-778d51001813"
            description="This is the name of our application"
            defaultMessage="My Shopping List"
          />
        </h1>
      */}

      <LocaleSelector/>

      <AddItemInput/>

      <div className="list-container">
        {items.map(item => <ListItem key={item.id} item={item}/>)}
      </div>
    </div>
  );
}

export {ShoppingList};

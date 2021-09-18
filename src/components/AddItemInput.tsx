import * as React from "react";
import { ItemsContext } from "../utils/items";
import { IntlContext } from "react-intl";
import { MSG_addItem, MSG_cost, MSG_noteExample } from "../strings";
import "./AddItemInput.css";
import { CURRENCIES, LocaleContext } from "../utils/i18n";

function AddItemInput() {
  const [note, setNote] = React.useState<string>('');
  const [costStr, setCostStr] = React.useState<string>('');
  const {currency} = React.useContext(LocaleContext)
  const {addItem} = React.useContext(ItemsContext);
  const {formatMessage} = React.useContext(IntlContext);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    let cost: number = parseFloat(costStr);
    if (!cost) {
      alert("A numeric cost is required.");
      return;
    }
    cost = Math.round(cost * Math.pow(10, CURRENCIES[currency].decimals));
    addItem(note, cost);
    setNote('');
    setCostStr('')
  }

  return (
    <form onSubmit={submit} className="add-item-input">
      <input type="text"
             autoFocus
             style={{marginRight: 15, flexGrow: 1}}
             value={note}
             placeholder={formatMessage(MSG_noteExample)}
             onChange={e => setNote(e.currentTarget.value)}/>
      <input type="text"
             style={{marginRight: 15, width: 100}}
             value={costStr}
             placeholder={formatMessage(MSG_cost)}
             onChange={e => setCostStr(e.currentTarget.value)}/>
      <input type="submit"
             value={formatMessage(MSG_addItem)}/>
    </form>
  );
}

export {AddItemInput};

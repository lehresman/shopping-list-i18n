import * as React from "react";
import { IntlContext } from "react-intl";
import { MSG_addItem, MSG_cost, MSG_noteExample } from "../strings";
import "./AddItemInput.css";
import { LocaleContext } from "../utils/locale_context";
import { ItemsContext } from "../utils/items_context";
import { parseCurrency } from "../utils/formatters";

function AddItemInput() {
  const [note, setNote] = React.useState<string>('');
  const [costStr, setCostStr] = React.useState<string>('');
  const {localeSettings} = React.useContext(LocaleContext)
  const {addItem} = React.useContext(ItemsContext);
  const {formatMessage} = React.useContext(IntlContext);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      addItem(note, parseCurrency(costStr, localeSettings));
      setNote('');
      setCostStr('')
      document.getElementById('note-input')?.focus();
    } catch(e: any) {
      alert(e.message);
    }
  }

  return (
    <form onSubmit={submit} className="add-item-input">
      <input type="text"
             id="note-input"
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

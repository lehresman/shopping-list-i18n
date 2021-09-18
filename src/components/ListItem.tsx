import * as React from "react";
import "./ListItem.css";
import { IntlContext } from "react-intl";
import { MSG_completedOn } from "../strings";
import { formatCurrency, formatDate } from "../utils/formatters";
import { IItem, ItemsContext } from "../utils/items_context";
import { LocaleContext } from "../utils/locale_context";

interface IProps {
  item: IItem;
}

function ListItem(props: IProps) {
  const {item} = props;
  const {localeSettings} = React.useContext(LocaleContext);
  const {formatMessage} = React.useContext(IntlContext);
  const {setItemComplete} = React.useContext(ItemsContext);

  return (
    <label className={`list-item ${item.completed ? 'completed' : ''}`}>
      <input type="checkbox"
             checked={item.completed}
             onChange={e => setItemComplete(item.id, e.currentTarget.checked)}/>
      <div className="info-container">
        <div className="details">
          <div className="note">{item.note}</div>
          <div className="cost">{formatCurrency(item.cost, localeSettings)}</div>
        </div>
        {item.completed && item.completedOn && (
          <div className="completed-info">
            {formatMessage(MSG_completedOn, {date: formatDate(item.completedOn, localeSettings)})}
          </div>)}
      </div>
    </label>
  );
}

export {ListItem};

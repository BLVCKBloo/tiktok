import classNames from "classnames/bind";
import style from "./SearchItem.module.scss";
import Item from "./Item";
import Account from "./Account";
import Setting from "./Setting";
const cx = classNames.bind(style);

function Items({ setting, account, ...prop }) {
  let Prop = Item;
  if (account) {
    Prop = Account;
  } else if (setting) {
    Prop = Setting;
  } else {
    Prop = Item;
  }
  return <Prop {...prop} />;
}

export default Items;

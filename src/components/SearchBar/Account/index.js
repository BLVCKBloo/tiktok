import classNames from "classnames/bind";
import style from "../SearchItem.module.scss";
const cx = classNames.bind(style);

function Account({ avata, name, status }) {
  const classes = cx("search-list", "search-item");
  return (
    <li className={classes}>
      <span className={cx("search-user-avata")}>
        <img src={avata} alt="#" />
      </span>
      <div className={cx("search-content", "user-content")}>
        <h4>{name}</h4>
        <span>{status}</span>
      </div>
    </li>
  );
}

export default Account;

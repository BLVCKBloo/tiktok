import classNames from "classnames/bind";
import style from "../SearchItem.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(style);

function Setting({ status, img }) {
  const classes = cx("setting-list", "setting-item");
  return (
    <li className={classes}>
      <img src={img} alt="" />
      <div className={cx("search-content", "item-content")}>
        <h4>{status}</h4>
      </div>
    </li>
  );
}

export default Setting;

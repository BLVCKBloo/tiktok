import classNames from "classnames/bind";
import style from "../SearchItem.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(style);

function Item({ status }) {
  const classes = cx("search-list", "search-item");
  return (
    <li className={classes}>
      <img src={images.searchItemIcon} alt="" />
      <div className={cx("search-content", "item-content")}>
        <h4>{status}</h4>
      </div>
    </li>
  );
}

export default Item;

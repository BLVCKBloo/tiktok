import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import imagesPng from "~/assets/imagesPng";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  // faEllipsisVertical,
  // faMagnifyingGlass,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import { Wrapper as PopperWraper } from "~/components/Popper";
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 0);
  // }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="#" />
        </div>

        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWraper>
                {/* <div className={cx("search-title")}>Bạn có thể thích</div> */}
                <li className={cx("search-list", "search-item")}>
                  <img
                    className={cx("search-icon")}
                    src={images.searchItemIcon}
                    alt=""
                  />
                  <div className={cx("search-content", "item-content")}>
                    <h4>bonjour</h4>
                  </div>
                </li>
                <li className={cx("search-list", "search-item")}>
                  <img
                    className={cx("search-icon")}
                    src={images.searchItemIcon}
                    alt=""
                  />
                  <div className={cx("search-content", "item-content")}>
                    <h4>nhan061102</h4>
                  </div>
                </li>
                <li className={cx("search-list", "search-item")}>
                  <img
                    className={cx("search-icon")}
                    src={images.searchItemIcon}
                    alt=""
                  />
                  <div className={cx("search-content", "item-content")}>
                    <h4>nhan061102</h4>
                  </div>
                </li>
                <div className={cx("search-title")}>Tài khoản</div>
                <li className={cx("search-list", "search-user")}>
                  <span className={cx("search-user-avata")}>
                    <img src={imagesPng.avata} alt="#" />
                  </span>
                  <div className={cx("search-content", "user-content")}>
                    <h4>nhan061102</h4>
                    <span>Hi Everyone!</span>
                  </div>
                </li>
              </PopperWraper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="text" placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx("clear", "inner-icon")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon
              className={cx("loading", "inner-icon")}
              icon={faSpinner}
            />
            <span className={cx("split")}></span>
            {/* <button className={cx("search-btn")}>
              <img src={images.searchLogo} alt="#" />
            </button> */}
            <Button type="search-btn">
              <img src={images.searchLogo} alt="#" />
            </Button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button type="upload" size="medium">
            <img src={images.uploadIcon} alt="" />
            Tải lên
          </Button>
          <Button type="login" size="medium">
            Đăng nhập
          </Button>
          <Button type="menu">
            <img src={images.menuIcon} alt="" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

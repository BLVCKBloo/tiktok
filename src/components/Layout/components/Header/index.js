import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import imagesPng from "~/assets/imagesPng";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Button2 from "~/components/Button";
import Items from "~/components/SearchBar";
import Tippy from "@tippyjs/react/headless";
import Menu from "~/components/Popper/Menu";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import { Wrapper as PopperWraper } from "~/components/Popper";

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [menuResult, setMenuResult] = useState([]);

  const menuDrop = (e) => {
    setMenuResult(1);
  };
  const searchDrop = (e) => {
    setSearchResult(e.target.value);
  };

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
                <div className={cx("search-title")}>Bạn có thể thích</div>
                <Items status="con mèo bự" />
                <Items status="yasuo 20gg" />
                <Items status="yasuo 20gg" />
                <Items status="Vayne đi top" />
                <div className={cx("search-title")}>Tài khoản</div>
                <Items
                  avata={imagesPng.img1}
                  name="nhan061102"
                  status="eqweqwe"
                  account
                />
                <Items
                  name="Hồ Hoàng Nhân"
                  status="eqweqwe"
                  avata={imagesPng.img2}
                  account
                />
              </PopperWraper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              type="text"
              placeholder="Tìm kiếm"
              onChange={searchDrop}
              value={searchResult}
              spellCheck={false}
            />
            {/* <button className={cx("clear", "inner-icon")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon
              className={cx("loading", "inner-icon")}
              icon={faSpinner}
            /> */}
            <span className={cx("split")}></span>
            <Button type="search-btn">
              <img src={images.searchLogo} alt="#" />
            </Button>
          </div>
        </Tippy>

        <Menu>
          {/* <div className={cx("menu")}>
              <img src={images.menuIcon} alt="" />
            </div> */}
          <div className={cx("actions")}>
            <Button type="upload" size="medium">
              <img src={images.uploadIcon} alt="" />
              Tải lên
            </Button>
            <Button type="login" size="medium">
              Đăng nhập
            </Button>
            <Button size="medium" onMouseOver={menuDrop}>
              <img src={images.menuIcon} alt="" />
            </Button>
          </div>
        </Menu>
      </div>
    </header>
  );
}

export default Header;

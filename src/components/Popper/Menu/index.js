import classNames from "classnames/bind";
import style from "../Popper.module.scss";
import Tippy from "@tippyjs/react/headless";
import images from "~/assets/images";
import Items from "~/components/SearchBar";
import Button2 from "~/components/Button";
import { Wrapper as PopperWraper } from "~/components/Popper";

const cx = classNames.bind(style);
function Menu({ children, value }) {
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("header-setting")} tabIndex="-1" {...attrs}>
          <PopperWraper type="settingbox">
            <Items setting img={images.transIcon} status="Tiếng Việt" />
            <Items setting img={images.spIcon} status="Phản hồi và trợ giúp" />
            <Items
              setting
              img={images.keycapIcon}
              status="Phím tắt trên bàn phím"
            />
            <Items setting img={images.nightIcon} status="Chế độ tối" />
          </PopperWraper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

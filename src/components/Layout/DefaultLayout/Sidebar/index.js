import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";
import images from "~/assets/images";

import Button from "~/components/Button";
const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <nav className={cx("navmain")}>
        <ul className={cx("navmain-ul")}>
          <li className={cx("navmain-link")}>
            <img fill="red" src={images.navHomeChecked} alt="" />

            <span>Dành cho bạn</span>
          </li>
          <li className={cx("navmain-link")}>
            <img src={images.navPeople} alt="" />
            <span>Đang Follow</span>
          </li>
          <li className={cx("navmain-link")}>
            <img src={images.navCompass} alt="" />
            <span>Khám phá</span>
            <div className={cx("navlink-content")}>Mới</div>
          </li>
          <li className={cx("navmain-link")}>
            <img src={images.navVideo} alt="" />
            <span>LIVE</span>
          </li>
        </ul>
      </nav>
      <div className={cx("divsplit")}></div>
      <div className={cx("framebox")}>
        <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
        {/* <button className={cx("framebox-btn")}>Đăng nhập</button> */}
        <Button type="frame-btn" size="large">
          Đăng nhập
        </Button>
      </div>
      <div className={cx("divsplit")}></div>
      <div className={cx("navfooter")}>
        <div className={cx("navfooter-link")}>
          <a href="#">Giới thiệu</a>
          <a href="#">Bảng tin</a>
          <a href="#">Liên hệ</a>
          <a href="#">Sự nghiệp</a>
          <a href="#">ByteDance</a>
        </div>
        <div className={cx("navfooter-link")}>
          <a href="#">TikTok for Good</a>
          <a href="#">Quảng cáo</a>
          <a href="#">Developers</a>
          <a href="#">Minh bạch</a>
          <a href="#">Tiktok Rewards</a>
          <a href="#">Tiktok Embeds</a>
        </div>
        <div className={cx("navfooter-link")}>
          <a href="#">Trợ giúp</a>
          <a href="#">An toàn</a>
          <a href="#">Điều khoản</a>
          <a href="#">Quyền riêng tư</a>
          <a href="#">Cổng thông tin tác giả</a>
          <a href="#">Hướng dẫn cộng đồng</a>
        </div>
        <div className={cx("navfooter-link")}>
          <a href="#">Thêm</a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

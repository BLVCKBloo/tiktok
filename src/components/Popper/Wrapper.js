import classNames from "classnames/bind";
import style from "./Popper.module.scss";

const cx = classNames.bind(style);
function Wrapper({ children }) {
  return <ul className={cx("wrapper")}>{children}</ul>;
}

export default Wrapper;

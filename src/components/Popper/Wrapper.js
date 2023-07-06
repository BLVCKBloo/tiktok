import classNames from "classnames/bind";
import style from "./Popper.module.scss";
// import Items from "~/components/SearchBar";

const cx = classNames.bind(style);
function Wrapper({ children, type }) {
  let Prop = "ul";
  var types = "wrapper";
  type ? (types = type) : (types = "wrapper");
  return <Prop className={cx(types)}>{children}</Prop>;
}

export default Wrapper;

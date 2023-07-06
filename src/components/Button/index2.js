import classNames from "classnames/bind";
// import style from "./Button.module.scss";

// const cx = classNames.bind(style);

function Button2({ children, onClick }) {
  // const classes = cx("wrapper");
  return (
    <button className="eqweqw">
      <span>{children}</span>
    </button>
  );
}

export default Button2;

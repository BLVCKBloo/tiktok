import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

const cx = classNames.bind(style);

function Button({ to, href, type, size, children, onClick, ...passprop }) {
  let Comp = "button";
  const prop = {
    onClick,
    ...passprop,
  };
  if (to) {
    prop.to = to;
    Comp = Link;
  } else if (href) {
    prop.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", type, size);
  return (
    <Comp className={classes} {...prop}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;

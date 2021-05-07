import React from "react";
import classNames from "classnames/bind";

import styles from "./header.module.css";

const cx = classNames.bind(styles);

function Header() {
  return <div className={cx("header")}>Some text</div>;
}

export default Header;

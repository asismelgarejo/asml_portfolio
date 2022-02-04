import React from "react";
import { AppBarCustom } from "../AppBarCustom";
import { Footer } from "../Footer";

import styles from "./Layout.module.sass";

interface LayoutProps {
  children: React.ReactNode | string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <AppBarCustom />
      <div className={styles.Content}>{props.children}</div>
      <Footer />
    </div>
  );
};

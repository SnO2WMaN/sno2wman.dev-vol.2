import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

import Footer from "~/components/Footer";
import MobileNav from "~/components/MobileNavMenu";
import Nav from "~/components/NavMenu";
import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };
export const App: React.FC<Props> = ({ Component, pageProps, className }) => {
  return (
    <div className={classnames(className, "flex", "flex-col", "lg:flex-row")}>
      <div className={classnames("hidden", "lg:block")}>
        <Nav className={classnames("w-64", "h-full")} />
      </div>
      <div className={classnames("block", "lg:hidden")}>
        <MobileNav
          className={classnames(
            "fixed",
            "bottom-0",
            "left-0",
            "mb-4",
            "ml-4",
            "z-50",
          )}
        />
      </div>
      <div
        className={classnames(
          "flex-grow",
          "h-screen",
          "relative",
          "bg-gray-900",
          "overflow-y-scroll",
        )}
      >
        <Component {...pageProps} />
        <div className={classnames("block", "lg:hidden")}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export const AppStyledComponent: typeof App = styled(App)``;

export default AppStyledComponent;

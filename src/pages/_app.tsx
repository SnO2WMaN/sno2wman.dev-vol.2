import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

import MobileNav from "~/components/MobileNavMenu";
import Nav from "~/components/NavMenu";
import PageTransition from "~/components/PageTransition";
import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };
export const AppComponent: React.FC<Props> = ({
  Component,
  pageProps,
  className,
}) => (
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
      className={classnames("flex-grow", "h-screen", "relative", "bg-gray-900")}
    >
      <PageTransition
        className={classnames(
          "absolute",
          "top-0",
          "w-full",
          "h-screen",
          "overflow-y-scroll",
        )}
      >
        <Component {...pageProps} />
      </PageTransition>
    </div>
  </div>
);
export const AppStyledComponent: typeof AppComponent = styled(AppComponent)``;

const App = (props) => {
  return <AppStyledComponent {...props} />;
};

export default App;

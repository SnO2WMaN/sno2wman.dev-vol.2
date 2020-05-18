import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

import Nav from "~/components/NavMenu";
import PageTransition from "~/components/PageTransition";
import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };
export const AppComponent: React.FC<Props> = ({
  Component,
  pageProps,
  className,
}) => (
  <div className={classnames(className, "flex")}>
    <Nav className={classnames("h-screen", "w-0", "lg:w-64")} />
    <div className={classnames("flex-grow", "relative", "bg-gray-900")}>
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

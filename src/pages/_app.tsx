import { config } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

import Nav from "~/components/NavMenu";

import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };
export const AppComponent: React.FC<Props> = ({
  Component,
  pageProps,
  className,
}) => (
  <div className={classnames(className)}>
    <div className={classnames("flex")}>
      <Nav className={classnames("h-screen", "w-0", "lg:w-64")} />
      <Component
        {...pageProps}
        className={classnames("bg-gray-900", "flex-grow", "min-h-screen")}
      />
    </div>
  </div>
);
export const AppStyledComponent: typeof AppComponent = styled(AppComponent)``;

const App = (props) => {
  return <AppStyledComponent {...props} />;
};

export default App;

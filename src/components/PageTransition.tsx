import classnames from "classnames";
import { withRouter, useRouter } from "next/router";
import React, { useContext, Fragment } from "react";
import { useTransition, animated, config } from "react-spring";
import styled from "styled-components";

const Context = React.createContext();
const Provider = ({ router, children }) => (
  <Context.Provider value={router}>{children}</Context.Provider>
);

// const useRouter = () => useContext(Context);
const RouterContextProvider = withRouter(Provider);

const PageTransition = (props) => {
  const router = useRouter();
  const transitions = useTransition(router, (r) => r.pathname, {
    config: { ...config.gentle },
    from: { opacity: 0, transform: "translateY(-50%" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(50%)" },
  });

  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        const a = item.components?.[item.pathname];
        return (
          <animated.div
            key={key}
            style={style}
            className={classnames(props.className)}
          >
            {a ? <a.Component {...a.prop} /> : props.children}
          </animated.div>
        );
      })}
    </>
  );
};
export default PageTransition;

import classnames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import { animated, useTransition, config } from "react-spring";

const PageTransition = (props) => {
  const router = useRouter();
  const transitions = useTransition(router, (r) => r.pathname, {
    config: { mass: 0.25 },
    from: { opacity: 0, transform: "translateY(-20%" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(20%)" },
  });

  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        const before = (item as any).components?.[item.pathname];
        return (
          <animated.div
            key={key}
            style={style}
            className={classnames(props.className)}
          >
            {before ? <before.Component {...before.prop} /> : props.children}
          </animated.div>
        );
      })}
    </>
  );
};
export default PageTransition;

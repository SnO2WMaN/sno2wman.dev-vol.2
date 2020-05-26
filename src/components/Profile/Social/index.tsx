import classnames from "classnames";
import Color from "color";
import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import { socials } from "../../../data/accounts";

export type Props = ContainerProps;
export const Component: React.FC<Props> = ({
  className,
  icon,
  color,
  link,
  t,
}) => {
  const maskAnimation = useSpring({
    scale: 1,
    opacity: 0,
    from: { scale: 0, opacity: 1 },
    delay: t * 500,
  });
  const iconAnimation = useSpring({
    scale: 1,
    opacity: 1,
    from: { scale: 0, opacity: 0 },
    delay: t * 500,
  });

  return (
    <a
      className={classnames(className, "relative")}
      target="_blank"
      rel="noreferrer"
      href={link}
    >
      <animated.div
        className={classnames("absolute", "inset-0", "rounded-full")}
        style={{
          backgroundColor: color,
          ...maskAnimation,
          transform: maskAnimation.scale.interpolate((v) => `scale(${v})`),
        }}
      />
      <div
        className={classnames("hoverer", "absolute", "inset-0", "rounded-full")}
        style={{ backgroundColor: Color(color).alpha(0.125).toString() }}
      />
      <animated.div
        className={classnames(
          "absolute",
          "inset-0",
          "flex",
          "justify-center",
          "items-center",
        )}
        style={{
          ...iconAnimation,
          transform: iconAnimation.scale.interpolate((v) => `scale(${v})`),
        }}
      >
        {icon}
      </animated.div>
    </a>
  );
};
export const StyledComponent: typeof Component = styled(Component)`
  padding-top: 100%;
  > .hoverer {
    opacity: 0;
    transform: scale(0);
    transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover {
    > .hoverer {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export type ContainerProps = {
  className?: string;

  t: number;
} & Omit<typeof socials[number], "key">;
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

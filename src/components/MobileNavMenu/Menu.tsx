import {
  faBriefcase,
  faHome,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import React from "react";
import { animated, useTrail } from "react-spring";
import styled from "styled-components";
import { Merge } from "type-fest";

import Link from "./Link";

const AnimatedLink = animated(Link);
const links = [
  (props) => (
    <AnimatedLink link="/" icon={faHome} key="home" {...props}>
      Home
    </AnimatedLink>
  ),
  (props) => (
    <AnimatedLink link="/profile" icon={faIdCard} key="profile" {...props}>
      Profile
    </AnimatedLink>
  ),
  (props) => (
    <AnimatedLink link="/projects" icon={faBriefcase} key="projects" {...props}>
      Projects
    </AnimatedLink>
  ),
];

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({ className, children }) => (
  <nav className={classnames(className, "flex", "flex-col", "space-y-4")}>
    {children}
  </nav>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
  open: boolean;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  const { open } = props;
  const trail = useTrail(links.length, {
    config: { mass: 1, tension: 450 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 50,
    from: { opacity: 0, y: 50 },
  });

  return (
    <StyledComponent {...props}>
      {trail.map(({ y, ...rest }, index) =>
        links[index]({
          style: {
            transform: y.interpolate((value) => `translateY(${value}%)`),
            ...rest,
          },
        }),
      )}
    </StyledComponent>
  );
};

export default SocialButton;

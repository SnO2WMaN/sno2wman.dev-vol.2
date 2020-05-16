import {
  faHome,
  faBriefcase,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import Link from "./Link";

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({ className }) => (
  <nav className={classnames(className, "bg-gray-100", "flex", "items-center")}>
    <ul className={classnames("w-full")}>
      <Link link="/" icon={faHome}>
        Home
      </Link>
      <Link link="/profile" icon={faIdCard}>
        Profile
      </Link>
      <Link link="/work" icon={faBriefcase}>
        Works
      </Link>
    </ul>
  </nav>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

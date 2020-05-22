import classnames from "classnames";
import Color from "color";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import { socials } from "./Links";

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({
  className,
  icon,
  color,
  link,
}) => (
  <a
    className={classnames(className, "relative")}
    target="_blank"
    rel="noreferrer"
    href={link}
  >
    <div
      className={classnames("hoverer", "absolute", "inset-0", "rounded-full")}
      style={{ backgroundColor: Color(color).alpha(0.125).toString() }}
    />
    <div
      className={classnames(
        "absolute",
        "inset-0",
        "flex",
        "justify-center",
        "items-center",
      )}
    >
      {icon}
    </div>
  </a>
);
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
} & Omit<typeof socials[number], "key">;
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({ className, children }) => (
  <div className={classnames(className, "rounded")}>{children}</div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

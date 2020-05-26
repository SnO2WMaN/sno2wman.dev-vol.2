import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

export const Component: React.FC<{
  className?: string;
}> = ({ className, children }) => (
  <div className={classnames(className, "overflow-hidden", "rounded")}>
    {children}
  </div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;

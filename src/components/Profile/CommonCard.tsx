import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import Card from "./Card";

export const Component: React.FC<{
  className?: string;
}> = ({ className, children }) => (
  <Card className={classnames(className, "bg-white", "px-4", "py-8", "lg:p-6")}>
    {children}
  </Card>
);
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;

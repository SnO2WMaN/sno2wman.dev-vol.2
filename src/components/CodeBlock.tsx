import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import tailwind from "~/utils/tailwind";

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({ className, children }) => (
  <pre
    className={classnames(
      className,
      "bg-gray-900",
      "rounded",
      "py-8",
      "px-8",
      "text-white",
      "text-sm",
      "flex",
      "flex-col",
      "break-all",
    )}
  >
    {children}
  </pre>
);
export const StyledComponent: typeof Component = styled(Component)`
  > code {
    user-select: all;
    &:before {
      content: "$ ";
      user-select: none;
      color: ${tailwind.theme.colors.gray[700]};
    }
  }
`;

export type ContainerProps = {
  className?: string;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

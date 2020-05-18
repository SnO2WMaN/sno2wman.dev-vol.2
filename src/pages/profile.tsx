import classnames from "classnames";
import React from "react";
import styled from "styled-components";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Component: React.FC<Props> = ({ className }) => (
  <main className={classnames(className, "bg-blue-400")}>
    <div
      className={classnames(
        "w-full",
        "h-screen",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
      )}
    >
      <h1
        className={classnames(
          "text-xl",
          "text-white",
          "font-display",
          "tracking-widest",
        )}
      >
        Profile
      </h1>
    </div>
    <div className={classnames("w-full", "h-screen")} />
  </main>
);
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;

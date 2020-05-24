import classnames from "classnames";
import React from "react";
import styled from "styled-components";

import Head from "~/components/Head";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Component: React.FC<Props> = ({ className }) => (
  <main className={classnames(className, "bg-red-500")}>
    <Head title={"Projects"} url={"https://sno2wman.dev/projects"} />
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
        Projects
      </h1>
    </div>
  </main>
);
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;

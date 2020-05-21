import classnames from "classnames";
import Color from "color";
import React from "react";
import styled from "styled-components";

import Social from "~/components/Profile/Social";
import { colors, icons, links } from "~/components/Profile/Social/Links";

const social = Object.entries(links)
  .map(([key, link]) => ({
    key,
    href: link,
    color: colors[key],
    icon: icons[key],
  }))
  .sort(
    ({ color: a }, { color: b }) =>
      ((Color(a).hue() + 40) % 360) - ((Color(b).hue() + 40) % 360),
  );

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Component: React.FC<Props> = ({ className }) => {
  return (
    <main className={classnames(className, "bg-purple-400")}>
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
      <div className={classnames("w-full", "min-h-screen")}>
        <div
          className={classnames(
            "w-full",
            "max-w-screen-md",
            "py-32",
            "grid",
            "grid-cols-1",
            "lg:grid-cols-3",
            "gap-4",
            "p-4",
            "mx-auto",
          )}
        >
          <div
            className={classnames("bg-white", "rounded", "shadow-lg", "p-4")}
          >
            <div
              className={classnames("m-auto", "grid", "grid-cols-4", "gap-2")}
            >
              {social.map((props) => (
                <Social key={props.key} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;

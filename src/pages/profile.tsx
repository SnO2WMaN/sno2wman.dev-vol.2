import classnames from "classnames";
import Color from "color";
import React from "react";
import styled from "styled-components";

import CodeBlock from "~/components/CodeBlock";
import Card from "~/components/Profile/Card";
import Social from "~/components/Profile/Social";
import Timestamp from "~/components/Profile/Timestamp";
import { socials } from "~/data/accounts";

const social = socials.sort(
  ({ color: a }, { color: b }) =>
    ((Color(a).hue() + 40) % 360) - ((Color(b).hue() + 40) % 360),
);

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Component: React.FC<Props> = ({ className }) => {
  return (
    <main className={classnames(className, "bg-blue-300")}>
      <div
        className={classnames("w-full", "min-h-screen", "flex", "items-center")}
      >
        <div
          className={classnames(
            "w-full",
            "max-w-screen-md",
            "py-16",
            "lg:py-32",
            "px-8",
            "lg:px-4",

            "grid",
            "gap-2",
            "md:gap-4",

            "grid-cols-3",
            "md:grid-cols-4",
            "lg:grid-cols-6",

            "mx-auto",
          )}
        >
          <Card
            className={classnames(
              "col-span-2",
              "md:col-span-3",
              "lg:col-span-5",

              "flex",
              "flex-col",
              "justify-center",
            )}
          >
            <CodeBlock className={classnames("w-full", "h-full")}>
              <code>npx @sno2wman/cli</code>
            </CodeBlock>
          </Card>
          <Card
            className={classnames(
              "flex",
              "bg-white",

              "col-span-1",
            )}
          >
            <img
              className={classnames(
                "w-full",
                "m-auto",
                "rounded",
                "shadow",
                "pointer-events-none",
              )}
              src="https://www.gravatar.com/avatar/9a828752a7771c3bf43e3bea39d9cf57?s=128"
              alt="me"
            />
          </Card>
          <Card
            className={classnames(
              "bg-white",
              "p-2",
              "lg:p-4",

              "col-span-3",
              "md:col-span-4",
              "lg:col-span-2",
            )}
          >
            <div
              className={classnames(
                "m-auto",
                "grid",
                "grid-cols-6",
                "sm:grid-cols-8",
                "md:grid-cols-10",
                "lg:grid-cols-4",
                "gap-2",
              )}
            >
              {social.map((props) => (
                <Social key={props.key} {...props} />
              ))}
            </div>
          </Card>
          <Card
            className={classnames(
              "bg-white",
              "p-4",
              "lg:p-8",

              "col-span-3",
              "md:col-span-4",
              "lg:col-span-4",

              "flex",
              "flex-col",
              "justify-center",
            )}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Tellus in hac habitasse platea dictumst vestibulum rhoncus est.
              Imperdiet nulla malesuada pellentesque elit. Tortor pretium
              viverra suspendisse potenti nullam ac.
            </p>
          </Card>
          <Card
            className={classnames(
              "col-span-3",
              "md:col-span-4",
              "lg:col-span-6",
            )}
          >
            <Timestamp
              className={classnames(
                "w-full",
                "px-6",
                "lg:px-8",
                "py-6",
                "lg:py-8",
              )}
            />
          </Card>
        </div>
      </div>
    </main>
  );
};
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;

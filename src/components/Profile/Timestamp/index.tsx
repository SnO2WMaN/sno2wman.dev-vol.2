import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDotCircle,
  faLink,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import dayjs from "dayjs";
import React from "react";
import { animated, useSpring, useTrail } from "react-spring";
import styled from "styled-components";
import { Merge } from "type-fest";

import log from "~/data/timestamps";
import percentage from "~/utils/percentage";
import tailwind from "~/utils/tailwind";

type Event = {
  date: string;
  icon: IconDefinition;
  title: string;
  link?: string;
};

export const EComponent: React.FC<
  Event & { className?: string; t1: number; t2: number }
> = ({ className, date, icon, title, link, t1, t2 }) => {
  const baseDelay = 250 + t1 * 350 + t2 * 250;

  return (
    <li className={classnames(className, "flex", "flex-col", "items-center")}>
      <SplitSpan
        className={classnames(
          "text-gray-600",
          "text-xs",
          "tracking-widest",
          "font-mono",
          "select-none",
          "whitespace-no-wrap",
        )}
        delay={baseDelay}
      >
        {date}
      </SplitSpan>
      <div className={classnames("p-2", "my-2", "relative")}>
        <animated.div
          className={classnames(
            "bg-gray-500",
            "absolute",
            "inset-0",
            "rounded-full",
          )}
          style={useSpring({
            transform: "scale(1.25)",
            opacity: 0,
            from: { transform: "scale(0)", opacity: 1 },
            config: { friction: 40 },
            delay: baseDelay,
          })}
        />
        <animated.div
          style={useSpring({
            transform: "scale(1)",
            from: { transform: "scale(0)" },
            config: { friction: 35 },
            delay: baseDelay + 50,
          })}
          className={classnames("flex")}
        >
          <FontAwesomeIcon
            icon={icon}
            className={classnames("text-xl", "text-gray-500")}
          />
        </animated.div>
      </div>
      <animated.p
        className={classnames(
          "text-gray-400",
          "text-sm",
          "tracking-wide",
          "select-all",
          "origin-top",
        )}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "sideways",
          ...useSpring({
            transform: "translateY(0)",
            opacity: 1,
            from: {
              opacity: 0,
              transform: "translateY(-1em)",
            },
            config: { friction: 50, tension: 350 },
            delay: baseDelay + 200,
          }),
        }}
      >
        {title}
      </animated.p>
      {link && (
        <a
          href={link}
          className={classnames(
            "p-2",
            "mt-2",
            "flex",
            "rounded-full",
            "hover:bg-gray-800",
          )}
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className={classnames("text-sm", "text-gray-500")}
          />
        </a>
      )}
    </li>
  );
};

export const SplitSpan: React.FC<{ className?: string; delay: number }> = ({
  delay,
  children,
  className,
}) => {
  const sp = children.toString().split("");
  return (
    <span className={classnames(className)}>
      {useTrail(sp.length, {
        opacity: 1,
        y: 0,
        from: { opacity: 0, y: -50 },
        config: { tension: 500, friction: 35 },
        delay,
      }).map((style, index) => (
        <animated.span
          className={classnames("inline-block")}
          key={index}
          style={style}
        >
          {sp[index]}
        </animated.span>
      ))}
    </span>
  );
};
export type Props = Merge<ContainerProps, { timestamps: [string, Event[]][] }>;
export const Component: React.FC<Props> = ({ className, timestamps }) => (
  <div className={classnames(className, "bg-gray-900")}>
    <ul className={classnames("w-full", "flex", "overflow-x-scroll", "pb-4")}>
      {timestamps.map(([year, logs], yi, { length: years }) => (
        <li
          key={year}
          className={classnames(
            "flex",
            "flex-col",
            "pl-6",
            "pr-6",
            "py-2",
            "relative",
          )}
        >
          <animated.div
            className={classnames(
              "absolute",
              "inset-0",
              "border-l",
              "border-gray-800",
              "origin-top",
            )}
            style={useSpring({
              transform: "scaleY(1)",
              from: { transform: "scaleY(0)" },
              delay: percentage(yi, years) * 500,
              config: { tension: 500, friction: 65 },
            })}
          />
          <SplitSpan
            delay={percentage(yi, years) * 500}
            className={classnames(
              "text-gray-700",
              "text-xs",
              "tracking-widest",
              "font-mono",
              "select-none",
              "whitespace-no-wrap",
            )}
          >
            {year}
          </SplitSpan>
          <ul className={classnames("flex", "space-x-6")}>
            {logs.map((event, i, { length: events }) => (
              <EComponent
                key={i}
                {...event}
                t1={percentage(yi, years)}
                t2={percentage(i, events)}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
export const StyledComponent: typeof Component = styled(Component)`
  > ul {
    &::-webkit-scrollbar {
      overflow: hidden;
      height: 4px;
      background: transparent;
    }
    &::-webkit-scrollbar-button,
    &::-webkit-scrollbar-corner {
      display: none;
    }
    &::-webkit-scrollbar-track {
      background: ${tailwind.theme.colors.gray[800]};
    }
    &::-webkit-scrollbar-thumb {
      background: ${tailwind.theme.colors.gray[700]};
    }
  }
`;

export type ContainerProps = {
  className?: string;
};
export const Timestamp: React.FC<ContainerProps> = (props) => {
  const timestamps = Object.entries(
    log
      .map(({ date, ...rest }) => ({
        date: new Date(date),
        icon: faDotCircle,
        ...rest,
      }))
      .sort(({ date: a }, { date: b }) => a.getTime() - b.getTime())
      // eslint-disable-next-line unicorn/no-reduce
      .reduce(
        (p: { [year in number]: Event[] }, c) => ({
          ...p,
          [c.date.getFullYear()]: [
            ...(p[c.date.getFullYear()] || []),
            { ...c, date: dayjs(c.date).format("MM.DD") },
          ],
        }),
        {},
      ),
  ).sort(([a], [b]) => Number(a) - Number(b));

  return <StyledComponent {...props} timestamps={timestamps} />;
};

export default Timestamp;

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
import styled from "styled-components";
import { Merge } from "type-fest";

import log from "~/data/timestamps";
import tailwind from "~/utils/tailwind";

type Event = {
  date: string;
  icon: IconDefinition;
  title: string;
  link?: string;
};

export const EComponent: React.FC<Event & { className?: string }> = ({
  className,
  date,
  icon,
  title,
  link,
}) => (
  <li className={classnames(className, "flex", "flex-col", "items-center")}>
    <span
      className={classnames(
        "text-gray-600",
        "text-xs",
        "tracking-widest",
        "font-mono",
        "select-none",
      )}
    >
      {date}
    </span>
    <div className={classnames("p-2", "my-1", "flex")}>
      <FontAwesomeIcon
        icon={icon}
        className={classnames("text-xl", "text-gray-500")}
      />
    </div>
    <p
      className={classnames(
        "text-gray-400",
        "text-sm",
        "tracking-wide",
        "select-all",
      )}
      style={{
        writingMode: "vertical-rl",
        textOrientation: "sideways",
      }}
    >
      {title}
    </p>
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

export type Props = Merge<ContainerProps, { timestamps: [string, Event[]][] }>;
export const Component: React.FC<Props> = ({ className, timestamps }) => (
  <div className={classnames(className, "bg-gray-900")}>
    <ul className={classnames("w-full", "flex", "overflow-x-scroll", "pb-4")}>
      {timestamps.map(([year, logs]) => (
        <li
          key={year}
          className={classnames(
            "flex",
            "flex-col",
            "pl-6",
            "pr-6",
            "py-2",
            "border-l",
            "border-gray-800",
          )}
        >
          <span
            className={classnames(
              "text-gray-700",
              "text-xs",
              "tracking-widest",
              "font-mono",
              "select-none",
            )}
          >
            {year}
          </span>
          <ul className={classnames("flex", "space-x-6")}>
            {logs.map((event, i) => (
              <EComponent key={i} {...event} />
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

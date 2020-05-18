import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

export type Props = Merge<ContainerProps, { current: boolean }>;
export const Component: React.FC<Props> = ({
  className,
  children,
  icon,
  link,
}) => (
  <li
    className={classnames(
      className,
      "flex",
      "items-center",
      "px-6",
      "py-4",
      "relative",
      "select-none",
      "hover:bg-gray-400",
    )}
  >
    <FontAwesomeIcon
      icon={icon}
      fixedWidth
      className={classnames("mr-3", "text-base", "text-gray-900")}
    />
    <span
      className={classnames(
        "tracking-wide",
        "text-sm",
        "uppercase",
        "text-gray-900",
      )}
    >
      {children}
    </span>
    <Link href={link}>
      <a className={classnames("absolute", "inset-0")} />
    </Link>
  </li>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;

  link: string;
  icon: IconDefinition;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

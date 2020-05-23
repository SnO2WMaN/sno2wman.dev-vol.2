import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

export type Props = Merge<ContainerProps, { current: boolean }>;
export const Component: React.FC<Props> = ({
  className,
  children,
  icon,
  link,
  current,
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
      "border-blue-400",
      { "border-l-8": current },
    )}
  >
    <FontAwesomeIcon
      icon={icon}
      fixedWidth
      className={classnames("mr-3", "text-base", "text-gray-900")}
    />
    <span
      className={classnames(
        "tracking-widest",
        "text-sm",
        "font-display",
        "uppercase",
        "text-gray-900",
      )}
    >
      {children}
    </span>
    <Link href={link}>
      <div className={classnames("absolute", "inset-0", "cursor-pointer")} />
    </Link>
  </li>
);
export const StyledComponent: typeof Component = styled(Component)`
  transition: border-width 0.25s ease;
`;

export type ContainerProps = {
  className?: string;

  link: string;
  icon: IconDefinition;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  const router = useRouter();
  const current = router.pathname === props.link;

  return <StyledComponent {...props} current={current} />;
};

export default SocialButton;

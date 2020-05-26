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
  ...rest
}) => (
  <li
    {...rest}
    className={classnames(
      className,
      "items-center",
      "relative",
      "select-none",
      "w-12",
      "h-12",
      "flex",
      "justify-center",
      "items-center",
      "bg-white",
      "rounded-lg",
      "shadow-lg",
      {
        "bg-opacity-25": current,
        "bg-opacity-50": !current,
      },
    )}
  >
    {!current && (
      <Link href={link}>
        <div className={classnames("absolute", "inset-0", "cursor-pointer")} />
      </Link>
    )}
    <FontAwesomeIcon
      icon={icon}
      fixedWidth
      className={classnames("text-base", "text-gray-900")}
    />
    <span
      className={classnames(
        "absolute",
        "tracking-wider",
        "text-xs",
        "uppercase",
        "ml-3",
        "font-display",
        "text-gray-900",
      )}
    >
      {children}
    </span>
  </li>
);
export const StyledComponent: typeof Component = styled(Component)`
  > span {
    left: 100%;
  }
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

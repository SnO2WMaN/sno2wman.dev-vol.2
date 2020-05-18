import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({
  className,
  children,
  icon,
  href,
}) => (
  <li
    className={classnames(
      className,
      "relative",
      "hover:bg-gray-300",
      "rounded-full",
    )}
  >
    <div
      className={classnames(
        "absolute",
        "inset-0",
        "flex",
        "justify-center",
        "items-center",
      )}
    >
      <FontAwesomeIcon
        icon={icon}
        className={classnames("text-xl", "text-gray-700")}
      />
    </div>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classnames("absolute", "inset-0")}
    />
  </li>
);
export const StyledComponent: typeof Component = styled(Component)`
  padding-top: 100%;
`;

export type ContainerProps = {
  className?: string;

  href: string;
  icon: IconDefinition;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

export type Props = ContainerProps;
export const Component: React.FC<Props> = ({ className, children }) => (
  <footer className={classnames(className, "bg-gray-700", "py-12", "px-20")}>
    <p className={classnames("text-gray-500", "tracking-wide")}>
      SnO2WMaN 2020
    </p>
    <p className={classnames("text-gray-500", "tracking-wide")}>
      <FontAwesomeIcon icon={faGithub} className={classnames("mr-2")} />
      <a
        href="https://github.com/SnO2WMaN/site"
        target="_blank"
        rel="noreferrer"
        className={classnames("underline")}
      >
        Repository
      </a>
    </p>
  </footer>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

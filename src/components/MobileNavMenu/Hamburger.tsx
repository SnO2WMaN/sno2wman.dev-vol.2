import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";
import styled from "styled-components";

export type Props = {
  className?: string;
  toggleMenu(): void;
  menu: boolean;
};

export const Component: React.FC<Props> = ({ className, toggleMenu, menu }) => (
  <button
    onClick={toggleMenu}
    className={classnames(
      className,
      "w-12",
      "h-12",
      "overflow-hidden",
      "bg-white",
      "bg-opacity-50",
      "focus:outline-none",
      "rounded-lg",
      "shadow-lg",
    )}
  >
    <div
      className={classnames(
        "absolute",
        "inset-0",
        "flex",
        "justify-center",
        "items-center",
        "transform",
        {
          "translate-y-0": !menu,
          "-translate-y-full": menu,
        },
        "transition-transform",
        "duration-300",
      )}
    >
      <FontAwesomeIcon
        icon={faBars}
        className={classnames("text-xl", "text-gray-900")}
      />
    </div>
    <div
      className={classnames(
        "absolute",
        "inset-0",
        "flex",
        "justify-center",
        "items-center",
        "transform",
        {
          "translate-y-0": menu,
          "translate-y-full": !menu,
        },
        "transition-transform",
        "duration-300",
      )}
    >
      <FontAwesomeIcon
        icon={faTimes}
        className={classnames("text-xl", "text-gray-900")}
      />
    </div>
  </button>
);
export const StyledComponent: typeof Component = styled(Component)`
  backdrop-filter: blur(10px);
`;

export default StyledComponent;
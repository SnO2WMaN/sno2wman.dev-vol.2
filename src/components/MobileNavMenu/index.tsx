import React, { useState } from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import Hamburger from "./Hamburger";

export type Props = Merge<
  ContainerProps,
  { toggleMenu(): void; menu: boolean }
>;
export const Component: React.FC<Props> = ({ className, toggleMenu, menu }) => (
  <>
    <Hamburger className={className} toggleMenu={toggleMenu} menu={menu} />
  </>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const MobileNav: React.FC<ContainerProps> = (props) => {
  const [state, setState] = useState(false);

  const toggleMenu = (): void => {
    setState(!state);
  };

  return <StyledComponent {...props} toggleMenu={toggleMenu} menu={state} />;
};

export default MobileNav;

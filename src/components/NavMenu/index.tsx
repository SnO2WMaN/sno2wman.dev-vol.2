import {
  faTwitter,
  faGithub,
  faSpeakerDeck,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBriefcase,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import React from "react";
import styled from "styled-components";
import { Merge } from "type-fest";

import Link from "./Link";
import Social from "./Social";

export type Props = Merge<ContainerProps, {}>;
export const Component: React.FC<Props> = ({ className }) => (
  <nav
    className={classnames(
      className,
      "bg-gray-100",
      "flex",
      "flex-col",
      "overflow-hidden"
    )}
  >
    <ul
      className={classnames(
        "flex-grow",
        "flex",
        "flex-col",
        "justify-center",
        "w-full"
      )}
    >
      <Link link="/" icon={faHome}>
        Home
      </Link>
      <Link link="/profile" icon={faIdCard}>
        Profile
      </Link>
      <Link link="/work" icon={faBriefcase}>
        Works
      </Link>
    </ul>
    <ul
      className={classnames(
        "w-full",
        "grid",
        "grid-cols-4",
        "col-gap-4",
        "row-gap-2",
        "px-6",
        "pb-6"
      )}
    >
      <Social icon={faTwitter} href="https://twitter.com/SnO2WMaN" />
      <Social icon={faGithub} href="https://github.com/SnO2WMaN" />
      <Social icon={faSteam} href="https://steamcommunity.com/id/SnO2WMaN" />
      <Social icon={faSpeakerDeck} href="https://speakerdeck.com/sno2wman" />
    </ul>
  </nav>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const SocialButton: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default SocialButton;

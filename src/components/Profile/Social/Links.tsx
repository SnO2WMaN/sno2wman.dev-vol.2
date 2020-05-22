import {
  faCodepen,
  faDiscord,
  faGithub,
  faKeybase,
  faLastfm,
  faNpm,
  faSoundcloud,
  faSpeakerDeck,
  faSpotify,
  faSteam,
  faTwitter,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";

import brandcolors from "~/data/brandcolors.json";
import links from "~/data/socials.json";
import { faAnnict, faBookmeter, faPixiv } from "~/icons";

export const colors: { [key in keyof typeof links]: string } = brandcolors;
const getFontAwesomeIcon = (
  key: keyof typeof links,
  icon: IconDefinition,
): JSX.Element => (
  <FontAwesomeIcon
    className={classnames("text-lg")}
    icon={icon}
    style={{ color: colors[key] }}
    fixedWidth
  />
);

export const icons: { [key in keyof typeof links]: JSX.Element } = {
  twitter: getFontAwesomeIcon("twitter", faTwitter),
  github: getFontAwesomeIcon("github", faGithub),
  spotify: getFontAwesomeIcon("spotify", faSpotify),
  soundcloud: getFontAwesomeIcon("soundcloud", faSoundcloud),
  steam: getFontAwesomeIcon("steam", faSteam),
  speakerdeck: getFontAwesomeIcon("speakerdeck", faSpeakerDeck),
  discord: getFontAwesomeIcon("discord", faDiscord),
  codepen: getFontAwesomeIcon("codepen", faCodepen),
  lastfm: getFontAwesomeIcon("lastfm", faLastfm),
  youtube: getFontAwesomeIcon("youtube", faYoutube),
  npm: getFontAwesomeIcon("npm", faNpm),
  keybase: getFontAwesomeIcon("keybase", faKeybase),
  pixiv: getFontAwesomeIcon("pixiv", faPixiv),
  annict: getFontAwesomeIcon("annict", faAnnict),
  bookmeter: getFontAwesomeIcon("bookmeter", faBookmeter),
};

export const socials: {
  key: keyof typeof links;
  color: string;
  icon: typeof icons[keyof typeof icons];
  link: string;
}[] = Object.entries(links).map(
  ([key, link]: [keyof typeof links, string]) => ({
    key,
    link,
    color: colors[key],
    icon: icons[key],
  }),
);

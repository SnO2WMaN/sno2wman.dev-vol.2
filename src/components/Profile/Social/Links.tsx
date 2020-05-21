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
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";

export const links = {
  twitter: "https://twitter.com/SnO2WMaN",
  github: "https://github.com/SnO2WMaN",
  spotify: "https://open.spotify.com/user/sno2wman",
  soundcloud: "https://soundcloud.com/sno2wman",
  steam: "https://steamcommunity.com/id/SnO2WMaN",
  speakerdeck: "https://speakerdeck.com/sno2wman",
  discord: "discord:SnO2WMaN#9459",
  codepen: "https://codepen.io/SnO2WMaN",
  lastfm: "https://www.last.fm/user/SnO2WMaN",
  youtube: "https://www.youtube.com/channel/UCz_DWmdSbXtBpi1qw3Gg5YQ",
  npm: "https://www.npmjs.com/~sno2wman",
  keybase: "https://keybase.io/sno2wman",
};

export const colors: { [key in keyof typeof links]: string } = {
  twitter: "#1da1f2",
  github: "#24292e",
  spotify: "#1db954",
  soundcloud: "#ff8800",
  steam: "#1b2838",
  speakerdeck: "#009287",
  discord: "#7289da",
  codepen: "#131417",
  lastfm: "#d51007",
  youtube: "#ff0000",
  npm: "#cb3837",
  keybase: "#ff6f21",
};

export const icons: { [key in keyof typeof links]: any } = {
  twitter: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faTwitter}
      style={{ color: colors.twitter }}
    />
  ),
  github: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faGithub}
      style={{ color: colors.github }}
    />
  ),
  spotify: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faSpotify}
      style={{ color: colors.spotify }}
    />
  ),
  soundcloud: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faSoundcloud}
      style={{ color: colors.soundcloud }}
    />
  ),
  steam: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faSteam}
      style={{ color: colors.steam }}
    />
  ),
  speakerdeck: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faSpeakerDeck}
      style={{ color: colors.speakerdeck }}
    />
  ),
  discord: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faDiscord}
      style={{ color: colors.discord }}
    />
  ),
  codepen: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faCodepen}
      style={{ color: colors.codepen }}
    />
  ),
  lastfm: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faLastfm}
      style={{ color: colors.lastfm }}
    />
  ),
  youtube: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faYoutube}
      style={{ color: colors.youtube }}
    />
  ),
  npm: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faNpm}
      style={{ color: colors.npm }}
    />
  ),
  keybase: (
    <FontAwesomeIcon
      className={classnames("text-lg")}
      icon={faKeybase}
      style={{ color: colors.keybase }}
    />
  ),
};

import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "../../toolbox/constants/icons";

interface ISkill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const $SOCIAL_NETWORKS: ISkill[] = [
  {
    name: "JavaScript",
    Icon: FacebookIcon,
  },
  {
    name: "JavaScript",
    Icon: TwitterIcon,
  },
  {
    name: "Instagram",
    Icon: InstagramIcon,
  },
  {
    name: "Linkedin",
    Icon: LinkedinIcon,
  },
  {
    name: "Github",
    Icon: GithubIcon,
  },
];

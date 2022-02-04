import React from "react";
import { JSIcon } from "../../toolbox/constants/icons";

interface ISkill {
  id: number;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: number;
  description: string;
}

export const $SKILLS: ISkill[] = [
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "lorem",
  },
];

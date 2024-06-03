import { StaticImageData } from "next/image";

export interface TTags {
  id: number;
  title: string;
  color: string;
}

export interface TSkill {
  id: string;
  label: string;
  image: string;
  width?: string;
}

export interface TExperience {
  id: number;
  skills: TSkill[];
  role: string;
  companyName: string;
  period: string;
  about: string[];
  tags: TTags[];
}

export interface TProjectInfo {
  title: string;
  description: string;
  tags: TSkill[];
  img: string | StaticImageData;
  id: number;
  url: string;
  priority: number;
  categories: TTags[];
  mainCategoryId: number;
}

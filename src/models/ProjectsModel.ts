import { SocialIconType } from "./IconsModel";

export interface IProjectLink {
  icon: SocialIconType;
  src: string;
}

export interface IProjectItem {
  id: number;
  name: string;
  categ: string;
  descr: string;
  img: string;
  tags: string[];
  links: IProjectLink[];
}

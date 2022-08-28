export interface IWorkLink {
  icon: string;
  src: string;
}

export interface IWorkItem {
  id: number;
  name: string;
  categ: string;
  descr: string;
  img: string;
  tags: string[];
  links: IWorkLink[];
}

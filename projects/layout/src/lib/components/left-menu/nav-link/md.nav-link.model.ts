export interface SubLinks {
  label: string;
  link: string;
}

export interface Links {
  label: string;
  icon: string;
  link?: string;
  subLinks?: SubLinks[];
}

export interface LinkSection {
  label: string;
  icon: string;
  link: string;
  links?: Links[];
}

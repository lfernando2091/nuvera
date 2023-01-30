export interface User {
  email: string;
  user_name: string;
}

export interface HeaderMenu {
  title: string;
  icon: string;
  link: string;
  disabled?: boolean;
}

export interface HeaderConfig {
  icon?: string;
  user?: User;
  menu?: HeaderMenu[];
  logoutUrl?: string;
}

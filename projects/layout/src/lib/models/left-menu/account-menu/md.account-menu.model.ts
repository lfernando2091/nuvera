export enum MdRole {
  Genesis = "Genesis",
  Owner = "Owner",
  Admin = "Admin",
  Creator = "Creator",
  Editor = "Editor",
  Viewer = "Viewer",
  No_Role = "No Role"
}

export interface Account {
  role: MdRole | string;
  business: Business;
}

export interface Business {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface Account {
  id: string;
  name: string;
}

export interface AccountsList {
  list: Account[],
  selected: string;
}

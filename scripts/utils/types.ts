export type ListItemType = {
  slot: string;
  tagName: string;
  attrs: Record<string, string>;
};

export type ListOptions = {
  ariaCurrent?: boolean;
  items?: ListItemType[];
};

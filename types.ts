export type LineItem = {
  qty: number;
  id: number;
  descClean: string;
  lineTotal: number;
  newAddition?: boolean;
};

export type User = {
  id: number;
  name: string;
  newAddition?: boolean;
  items: LineItem[];
};

export type URLData = {
  lineItems: LineItem[];
  chatId: string;
  users: User[];
};

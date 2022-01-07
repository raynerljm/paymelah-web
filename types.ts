export type LineItem = {
  qty: number;
  descClean: string;
  lineTotal: number;
};

export type URLData = {
  lineItems: LineItem[];
  chatId: string;
  users: string[];
};

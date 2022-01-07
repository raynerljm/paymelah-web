export type LineItem = {
  qty: number;
  id?: number;
  descClean: string;
  lineTotal: number;
};

export type URLData = {
  lineItems: LineItem[];
  chatId: string;
  users: string[];
};

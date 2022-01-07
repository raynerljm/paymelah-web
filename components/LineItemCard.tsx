import { FC } from "react";
import { LineItem } from "../types";

type Props = {
  item: LineItem;
};

const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "SGD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const LineItemCard: FC<Props> = ({ item }) => {
  return (
    <>
      <div className="bg-slate-300 py-2 px-4 rounded-lg flex">
        <span>{item.descClean}</span>
        <span className="ml-auto">{formatter.format(item.lineTotal)}</span>
      </div>
    </>
  );
};
export default LineItemCard;

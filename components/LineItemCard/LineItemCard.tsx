import { FC, useState } from "react";
import { LineItem } from "../../types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditState from "./LineItemCardEdit";
import Card from "../Forms/Card";

type Props = {
  item: LineItem;
  updateLineItem: (id: number, newDesc: string, newPrice: number) => void;
  deleteLineItem: (id: number) => void;
};

const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "SGD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const LineItemCard: FC<Props> = ({ item, updateLineItem, deleteLineItem }) => {
  const [editMode, setEditMode] = useState(item.newAddition || false);

  const NormalState = () => (
    <Card location="item">
      <span>
        {item.descClean}
        <br />
        {formatter.format(item.lineTotal)}
      </span>
      <span className="ml-auto flex gap-4">
        <FaEdit
          onClick={() => setEditMode(true)}
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <FaTrashAlt
          onClick={() => deleteLineItem(item.id !== undefined ? item.id : -1)}
          className="text-red-600 cursor-pointer hover:scale-110 transition-all"
        />
      </span>
    </Card>
  );

  return (
    <>
      {!editMode ? (
        <NormalState />
      ) : (
        <EditState
          item={item}
          close={() => setEditMode(false)}
          updateLineItem={updateLineItem}
        />
      )}
    </>
  );
};
export default LineItemCard;

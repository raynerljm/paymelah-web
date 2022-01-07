import { FC, useState } from "react";
import { LineItem } from "../types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditState from "./LineItemCardEdit";

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
    <div className="bg-slate-300 py-2 px-4 text-xl rounded-lg flex items-center gap-2">
      <span>
        {item.descClean}
        <br />
        {formatter.format(item.lineTotal)}
      </span>
      <span className="ml-auto flex gap-4">
        <FaEdit onClick={() => setEditMode(true)} />
        <FaTrashAlt
          onClick={() => deleteLineItem(item.id !== undefined ? item.id : -1)}
        />
      </span>
    </div>
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

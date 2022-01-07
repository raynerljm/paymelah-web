import { FC, useState } from "react";
import { LineItem } from "../types";
import { FaTimes } from "react-icons/fa";
import TextInput from "./Forms/TextInput";

type Props = {
  item: LineItem;
  close: () => void;
  updateLineItem: (id: number, newDesc: string, newPrice: number) => void;
};

const LineItemCardEdit: FC<Props> = ({ item, close, updateLineItem }) => {
  const [newDesc, setNewDesc] = useState(item.descClean);
  const [newPrice, setNewPrice] = useState(item.lineTotal.toString());

  return (
    <>
      <div className="bg-slate-300 py-2 px-4 text-xl rounded-lg flex items-center gap-2">
        <span>
          <TextInput initial={newDesc} update={setNewDesc} />
          <br />
          SGD
          <TextInput initial={newPrice} update={setNewPrice} />
        </span>
        <span className="ml-auto">
          <FaTimes
            onClick={() => {
              updateLineItem(
                item.id !== undefined ? item.id : -1,
                newDesc,
                Number(newPrice)
              );
              close();
            }}
          />
        </span>
      </div>
    </>
  );
};
export default LineItemCardEdit;

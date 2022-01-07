import { FC, useState } from "react";
import { LineItem } from "../../types";
import { FaCheck, FaTimes } from "react-icons/fa";
import TextInput from "../Forms/TextInput";
import Card from "../Forms/Card";

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
      <Card location="item">
        <span>
          <TextInput value={newDesc} update={setNewDesc} />
          <span className="flex items-center gap-1 mt-2">
            SGD <TextInput value={newPrice} update={setNewPrice} />
          </span>
        </span>
        <span className="ml-auto">
          <FaCheck
            onClick={() => {
              updateLineItem(
                item.id !== undefined ? item.id : -1,
                newDesc,
                Number(newPrice)
              );
              close();
            }}
            className="text-green-700"
          />
        </span>
      </Card>
    </>
  );
};
export default LineItemCardEdit;

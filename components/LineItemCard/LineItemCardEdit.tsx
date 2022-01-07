import { FC, useState } from "react";
import { LineItem } from "../../types";
import { FaTimes } from "react-icons/fa";
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
      <Card>
        {" "}
        <span>
          <TextInput value={newDesc} update={setNewDesc} />
          <br />
          SGD
          <TextInput value={newPrice} update={setNewPrice} />
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
      </Card>
    </>
  );
};
export default LineItemCardEdit;

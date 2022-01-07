import {
  Dispatch,
  FC,
  useState,
  useRef,
  useEffect,
  FormEventHandler,
} from "react";
import { LineItem } from "../../types";
import { FaPlusCircle } from "react-icons/fa";
import TextInput from "../Forms/TextInput";

type Props = {
  addLineItem: () => void;
};

const LineItemCardAdd: FC<Props> = ({ addLineItem }) => {
  return (
    <>
      <div className="flex justify-center my-2">
        <FaPlusCircle
          className="text-3xl text-slate-300"
          onClick={addLineItem}
        />
      </div>
    </>
  );
};
export default LineItemCardAdd;

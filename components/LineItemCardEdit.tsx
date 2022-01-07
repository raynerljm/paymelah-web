import { Dispatch, FC, SetStateAction, useState } from "react";
import { LineItem } from "../types";
import { FaEdit, FaTrashAlt, FaTimes } from "react-icons/fa";

type Props = {
  close: () => void;
};

const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "SGD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const LineItemCardEdit: FC<Props> = ({ close }) => {
  return (
    <>
      <div className="bg-slate-300 py-2 px-4 text-xl rounded-lg flex items-center gap-2">
        <span>
          <input />
          <br />
          <input />
        </span>
        <span className="ml-auto">
          <FaTimes onClick={close} />
        </span>
      </div>
    </>
  );
};
export default LineItemCardEdit;

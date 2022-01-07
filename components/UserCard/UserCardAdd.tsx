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
  addUser: () => void;
};

const UserCardAdd: FC<Props> = ({ addUser }) => {
  return (
    <>
      <div className="flex justify-center my-2">
        <FaPlusCircle className="text-3xl text-slate-300" onClick={addUser} />
      </div>
    </>
  );
};
export default UserCardAdd;

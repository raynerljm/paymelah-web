import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  label: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

const Checkbox: FC<Props> = ({ label, checked, setChecked }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        checked={checked}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        id={label}
        className="text-accent-500 focus-visible:border-accent focus:border-accent cursor-pointer"
      />
      <label htmlFor={label} className="text-white cursor-pointer">
        {label}
      </label>
    </div>
  );
};
export default Checkbox;

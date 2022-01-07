import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  value: string;
  update: Dispatch<SetStateAction<string>>;
};

const TextInput: FC<Props> = ({ value, update }) => {
  return (
    <>
      <input
        value={value}
        type="text"
        onChange={(e) => update(e.target.value)}
        className="w-full rounded-lg py-[2px] font-bold text-lg border-2 focus-visible:border-accent"
      />
    </>
  );
};
export default TextInput;

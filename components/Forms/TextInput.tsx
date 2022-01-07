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
      />
    </>
  );
};
export default TextInput;

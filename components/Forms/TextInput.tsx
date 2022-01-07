import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  initial: string;
  update: Dispatch<SetStateAction<string>>;
};

const TextInput: FC<Props> = ({ initial, update }) => {
  return (
    <>
      <input
        value={initial}
        type="text"
        onChange={(e) => update(e.target.value)}
      />
    </>
  );
};
export default TextInput;

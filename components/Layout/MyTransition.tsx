import { FC } from "react";
import { Transition } from "@headlessui/react";

type Props = {
  show: boolean;
};

const MyTransition: FC<Props> = ({ children, show }) => {
  return (
    <>
      <Transition
        show={show}
        enter="transition-opacity duration-150"
        enterFrom="opacity-40"
        enterTo="opacity-100"
        // leave="transition-none duration-[-50ms]"
        // leaveFrom="opacity-100"
        // leaveTo="opacity-0"
      >
        {children}
      </Transition>
      <div className=" delay-75"></div>
    </>
  );
};
export default MyTransition;

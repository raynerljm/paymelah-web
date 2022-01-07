
import { FC } from "react";

type Props = {
  title: string;
  href: string;
};

const NavItem: FC<Props> = ({ title, href }) => {
  return (
    <>
      <div>
        <a
          className="flex flex-col items-center text-center text-white cursor-pointer text-md hover:text-ai-500"
          href={href}
        >
          {title}
        </a>
      </div>
    </>
  );
};
export default NavItem;
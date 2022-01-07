import { FC } from "react";

type Props = {
  title: string;
  href: string;
  closeSidebar?: () => void;
};

const NavItem: FC<Props> = ({ title, href, closeSidebar }) => {
  return (
    <>
      <div>
        <a
          className="flex flex-col items-center text-center text-white cursor-pointer text-md hover:text-ai-500"
          href={href}
          onClick={closeSidebar}
        >
          {title}
        </a>
      </div>
    </>
  );
};
export default NavItem;

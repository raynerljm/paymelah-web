import { FC } from "react";

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ children, className, href, onClick }) => {
  const withoutAnchor: JSX.Element = (
    <div
      className={`${className} select-none cursor-pointer rounded-md bg-white hover:bg-gradient text-ai-900 hover:text-white`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={`#${href}`}>{withoutAnchor}</a>;
  }

  return withoutAnchor;
};
export default Button;
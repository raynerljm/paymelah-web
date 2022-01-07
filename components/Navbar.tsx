import { FC, useState, useEffect } from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import {
    BsGithub , BsLinkedin
} from "react-icons/bs"

const Navbar: FC = () => {
  const [blackBG, setBlackBG] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 50 pixels
    const toggleVisibility = (): void => {
      if (window.pageYOffset > window.innerHeight) {
        setBlackBG(true);
      } else {
        setBlackBG(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed z-40 flex flex-row items-center w-full h-auto px-8 py-6 ${
        blackBG ? "bg-svg" : "bg-transparent"
      }`}
    >
      <div>
        <div className="text-1xl font-black text-white select-nonehover:text-transparent bg-clip-text">
        PlsPayMeLah
        </div>
      </div>
      <div className="flex flex-grow max-w-3xl justify-evenly">
        <NavItem title={"Home"} href={"#home"} />
        <NavItem title={"Features"} href="#features" />
        <NavItem title={"Telebot"} href="#telebot" />
        <NavItem title={"Platform"} href={"#platform"} />
        <NavItem title={"About Us"} href={"#aboutUs"} />
      </div>

      <div className="ml-auto">

      <a href="#github">
              < BsGithub className="icon" />
            </a>
            {/* <a href="#linkedin">
              <BsLinkedin className="icon" />
            </a> */}

      </div>
    </div>
  );
};
export default Navbar;
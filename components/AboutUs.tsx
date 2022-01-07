import { FC } from "react";
import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";

const Linkedin: FC = ({ children }) => {
  return (
    <div className="w-full" id="linkedin">
      {children}
      <div className="grid grid-rows-2 gap-2">
        <br />
        <h1 className="text-white text-center text-5xl font-semibold">
          <div className="flex justify-center items-center">
            <span className="font-semibold">Our Team </span>
          </div>
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-3 px-10 gap-7">
          <div className="flex justify-center items-center">
            <a className="cursor-pointer">
              <div className="hover:scale-110 transform transition-all duration-300">
                <a
                  href="https://www.linkedin.com/in/amosliew13/"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-30 rounded-lg"
                    src="/amos.jpeg"
                    alt="image"
                    width={200}
                    height={200}

                  />
                </a>
                <p className="text-center font-bold text-white text-xl mt-8">
                  Amos Liew
                </p>
              </div>
            </a>
          </div>


          <div className="flex justify-center items-center">
            <a className="cursor-pointer">
              <div className="hover:scale-110 transform transition-all duration-300">
                <a
                  href="https://www.linkedin.com/in/jess-raphael-ong-954091205/"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-30 rounded-lg"
                    src="/jess.png"
                    alt="image"
                    width={200}
                    height={200}
                  />
                </a>

                <p className="text-center font-bold text-white text-xl mt-8">
                  Jess
                </p>
              </div>
            </a>
          </div> 


          <div className="flex justify-center items-center">
            <a className="cursor-pointer">
              <div className="hover:scale-110 transform transition-all duration-300">
                <a
                  href="https://www.linkedin.com/in/raypuff/"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-30 rounded-lg"
                    src="/rayner.png"
                    alt="image"
                    width={200}
                    height={200}
                  />
                </a>
                <p className="text-center font-bold text-white text-xl mt-8">
                  Rayner Loh
                </p>
              </div>
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Linkedin;
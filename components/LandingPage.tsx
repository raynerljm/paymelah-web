import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "./Forms/Button";

const Landing: FC = ({ children }) => {
  return (
    <div className="pt-[84px] h-screen grid place-items-center mx-7" id="home">
      <div className="grid md:grid-cols-2 h-4/5">
        <div className="flex items-center justify-center h-full">
          <div className="transform hover:scale-110 hover:-translate-y-16 transition-all">
            <Fade direction="left" delay={500}>
              {/* MOBILE */}
              <div className="sm:hidden mb-10">
                <Image
                  src="/PayMeLah.png"
                  alt="Paymelah Icon"
                  layout="fixed"
                  width={200}
                  height={200}
                />
              </div>
              {/* DESKTOP */}
              <div className="hidden sm:block mb-4">
                <Image
                  src="/PayMeLah.png"
                  alt="Paymelah Icon"
                  layout="fixed"
                  width={300}
                  height={300}
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-3xl font-semibold text-center md:text-left">
            <Fade direction="down" delay={500}>
              <span className="font-semibold w-full">
                Bill splitting made easy.
              </span>
              <br />
              <p className="text-white text-lg font-light mt-6">
                Fast and hassle-free payment collection from your friends
              </p>
            </Fade>
            <br />
            <span>
              <Fade direction="up" delay={500}>
                <div className="ml-auto">
                  <Button
                    className="px-10 py-2 bg-white text-black font-bold w-full text-center"
                    href="platform"
                  >
                    Get Started
                  </Button>
                </div>
              </Fade>
            </span>
          </h1>
        </div>
        <div className="md:space"></div>
      </div>
    </div>
  );
};
export default Landing;

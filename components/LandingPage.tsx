import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../components/Button";

const Landing: FC = ({ children }) => {
  return (
    <div className="space h-almost mx-7" id="landing">
      <div className=" grid grid-cols-2 h-4/5">
        <div className="flex items-center justify-center h-full">
          <div className="transform hover:scale-110 hover:-translate-y-16 transition-all">
            <Fade direction="left">
              <Image
                src="/PayMeLah.png"
                alt="Paymelah Icon"
                layout="fixed"
                width={300}
                height={300}
              />
            </Fade>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-left text-3xl font-semibold">
            <span className="font-semibold">Bill splitting made easy.</span>
            <br/>
            <p className="text-left text-white text-lg font-light mt-6">
            Fast and hassle-free payment collection from your friends
          </p>
          <br/>
            <span>
            <Fade direction="up" delay={500}>
            <div className="ml-auto">
              <Button
                className="px-10 py-2 bg-white text-black font-bold max-w-max"
                href="platform"
              >
                Get Started
              </Button>
            </div>
          </Fade>
            </span>
            
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Landing;

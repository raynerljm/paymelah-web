import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../Forms/Button";

const GitHub: FC = ({ children }) => {
  return (
    <div className="space overflow-hidden">
      <div id="github" className="relative -top-24"></div>

      <div className="space h-almost mx-7" id="home">
        <div className="flex flex-col md:grid md:grid-cols-2 h-4/5">
          <div className="flex items-center justify-center h-full">
            <div className="transform hover:scale-110 hover:-translate-y-16 transition-all">
              <Fade direction="up">
                <Image
                  src="/GitHub.png"
                  alt="Telegram Icon"
                  layout="fixed"
                  width={300}
                  height={300}
                />
              </Fade>
            </div>
          </div>
          <div className="flex justify-center items-center h-full mt-8 md:mt-0">
            <h1 className="text-white items-center justify-center text-3xl font-semibold w-full">
              <span className="font-semibold">
                GitHub Repositories
              </span>
              <br />
              <br />
              <span>
                <Fade direction="up" delay={500}>
                <div className="grid md:grid-col-2 h-4/5">
                    <div>
                    <a
                      href="https://github.com/amoscookeh/PayMeLahBot"
                      target="blank"
                      rel="noreferrer"
                    >
                      <Button className="px-5 py-2 max-w-max  bg-white text-black font-bold w-full text-center">
                        Telegram Bot
                      </Button>

                      </a>
                      </div>
                      <br/>
                      <div>
                      <a href="https://github.com/raynerljm/paymelah-web"
                      target="blank"
                      rel="noreferrer"
                    >

                      <Button className="px-5 py-2 max-w-max bg-white text-black font-bold w-full text-center">
                        Webpage
                      </Button>
                    </a>
                    </div>
                  </div>
                </Fade>
              </span>
            </h1>
          </div>
        </div>
        <div className="space"></div>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default GitHub;

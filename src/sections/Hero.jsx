import BackgroundGradient from "@assets/png/bg-gradient.png";
import Button from "@components/Button";

export default function Hero() {
  return (
    <div className="container font-[Raleway] relative">
      <div className="flex flex-col items-center pt-24">
        <div className="image-container absolute inset-0 -z-10 flex justify-center items-center">
          <img
            src={BackgroundGradient}
            alt="background gradient"
            className="w-full h-max pt-36"
          />
        </div>

        <div className="text-container z-10">
          <h1 className="font-bold text-7xl text-center w-[38rem] mb-8">
            Awesome UI Dark Template for Webflow Agency
          </h1>
        </div>
        <div className="button-container z-10">
          <Button
            paddingY="58px"
            paddingX="18px"
            textColor="#FFFFFF"
            bgColor="#000000"
            text="Get In Touch"
          />
        </div>
      </div>
    </div>
  );
}

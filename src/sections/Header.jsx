import Logo from "@assets/svg/logo.svg"
import Button from "@components/Button"

export default function Header() {
  return (
    <header className="background-blur-xl z-20 py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} width={170} height={37} alt="company logo" />
          </div>
          <div>
            <nav className="bg-black/50 rounded-3xl border border-[#2B2B2B] list-none flex items-center gap-10 py-[22px] px-[42px]">
              <li className="text-white transition-colors duration-300">
                <a className="hover:text-[#ffffffb0]" href="#">Home</a>
              </li>
              <li className="text-white transition-colors duration-300">
                <a className="hover:text-[#ffffffb0]" href="#">About</a>
              </li>
              <li className="text-white transition-colors duration-300">
                <a className="hover:text-[#ffffffb0]" href="#">How it Works</a>
              </li>
              <li className="text-white transition-colors duration-300">
                <a className="hover:text-[#ffffffb0]" href="#">Services</a>
              </li>
            </nav>
          </div>
          <div className="flex gap-5 items-center">
            <Button
              textColor="#FFFFFF"
              bgColor="inherit"
              text="Sign In"
            ></Button>
            <Button
              paddingY="36px"
              paddingX="12px"
              textColor="#FFFFFF"
              bgColor="#4E47FF"
              text="Sign Up"
            ></Button>
          </div>
        </div>
      </div>
    </header>
  )
};

import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex gap-4 items-center h-16 w-full">
      <Image width={100} height={200} alt="logo" src="./Vidyum.svg" />
      <div className="ml-auto items-center flex gap-7">
        <a
          href="#"
          className="hover:font-bold transition-all ease-in-out duration-100"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:font-bold transition-all ease-in-out duration-100"
        >
          Features
        </a>
        <a
          href="#"
          className="hover:font-bold transition-all ease-in-out duration-100"
        >
          Classroom
        </a>
        <a
          href="#"
          className="hover:font-bold transition-all ease-in-out duration-100"
        >
          Github
        </a>
      </div>
      <div className="ml-auto">
        <Button>Login</Button>
      </div>
    </nav>
  );
}

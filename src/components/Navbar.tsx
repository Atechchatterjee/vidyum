import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar({
  active,
}: {
  active: "home" | "features" | "classroom" | "github";
}) {
  return (
    <nav className="flex gap-4 items-center h-16 w-full border-b-[1px] border-black px-10">
      <Image width={100} height={200} alt="logo" src="./Vidyum.svg" />
      <div className="ml-auto items-center flex gap-7">
        <a
          href="#"
          className={cn(
            active === "home" && "bg-red font-bold",
            "hover:font-bold transition-all ease-in-out duration-100"
          )}
        >
          Home
        </a>
        <a
          href="#"
          className={cn(
            active === "features" && "font-bold",
            "hover:font-bold transition-all ease-in-out duration-100"
          )}
        >
          Features
        </a>
        <a
          href="#"
          className={cn(
            active === "classroom" && "font-bold",
            "hover:font-bold transition-all ease-in-out duration-100"
          )}
        >
          Classroom
        </a>
        <a
          href="#"
          className={cn(
            active === "github" && "font-bold",
            "hover:font-bold transition-all ease-in-out duration-100"
          )}
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

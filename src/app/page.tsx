import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiOpenSourceFill } from "@remixicon/react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative w-[100%]">
      <Navbar active="home" />
      <main className="">
        <div className="flex h-[50rem] w-[100%]">
          <div className="z-[1000] relative w-[69.4%] border-r-[1px] border-black overflow-clip pt-[3rem]">
            <div className="w-[45rem] ml-[4rem]">
              <div className="flex w-full">
                <Image
                  src="./sparkle.svg"
                  width={120}
                  height={120}
                  alt="sparkle"
                  className="ml-[-2rem]"
                />
                <Image
                  src="./spark-star.svg"
                  width={80}
                  height={80}
                  alt="sparkle"
                  className="ml-auto mt-[1rem]"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-[4.7rem] mt-[-2rem] leading-tight">
                  Academic Learning, Reimagined.
                </h1>
                <p className="text-[1.5rem] w-[75%]">
                  All in one platform for Educational Institutions to meet their
                  students’ needs.
                </p>
              </div>
              <Button className="gap-4 mt-[2rem] py-5">
                Start Learning
                <RiArrowRightLine size={18} />
              </Button>
              <div className="flex gap-4 absolute bottom-[2rem]">
                <RiOpenSourceFill size={28} />
                <span className="text-xl font-medium items-center">
                  An Open Source Project
                </span>
              </div>
            </div>
            <Image
              src="/home-illus-1.svg"
              width={550}
              height={500}
              alt="academic learning group"
              className="absolute bottom-[0rem] right-[2rem]"
            />
          </div>
          <div className="relative h-[130%] w-[30.6%] z-[-1] overflow-clip">
            <Image
              src="/home-illus-2.svg"
              width={1000}
              height={500}
              alt="academic learning group"
              className="absolute scale-[185%] z-[-1] top-[-10rem] left-[-10rem]"
            />
            <Image
              src="/draw-illus-1.svg"
              width={500}
              height={500}
              alt="academic learning group"
              className="absolute bottom-[-5rem] right-[-10rem]"
            />
          </div>
        </div>
        <Image
          src="/section-1-bg.svg"
          width={1200}
          height={800}
          alt="section"
          className="w-[200%] mb-[10rem]"
        />
      </main>
    </div>
  );
}

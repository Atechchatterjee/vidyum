import { bricolage_grotesque } from "@/lib/font";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  RiArrowRightLine,
  RiCheckboxFill,
  RiExternalLinkLine,
} from "@remixicon/react";

export default function Home() {
  return (
    <div className="flex justify-center overflow-x-clip">
      <main className="w-[100rem]">
        <Navbar />
        <div className="mt-[0.5rem]">
          <div className="flex w-full">
            <Image
              src="/sparkle.svg"
              width={120}
              height={10}
              alt="sparkle"
              className="ml-[-1rem]"
            />
            <Image
              src="/spark-star.svg"
              width={80}
              height={10}
              alt="sparkle"
              className="ml-auto"
            />
          </div>
          <h1
            className={cn(
              bricolage_grotesque.className,
              "text-[4.5rem] mt-[-1.5rem]"
            )}
          >
            All-in-one AI Powered Platform, Re-imagined.
          </h1>
          <div className="flex flex-col gap-5 w-[50%]">
            <p className="text-2xl leading-9">
              All in one platform for Educational Institutions to meet their
              students’ needs.
            </p>
            <Button className="text-lg py-5 flex gap-3 w-[13rem]">
              Start Learning
              <RiArrowRightLine size={22} />
            </Button>
          </div>
        </div>
        <Image
          src="/landing-illus.png"
          width={1300}
          height={800}
          alt="landing-illus"
          className="flex-1 ml-auto mr-[-14rem] mt-[-3rem]"
        />
        <div className="flex flex-col gap-4 mt-[-50rem]">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <div className="relative flex flex-col gap-4 bg-[url('/box-bg-1.png')] w-[36rem] h-[34rem] bg-contain bg-no-repeat mt-16 py-7 px-7">
                <h2 className="text-3xl">Seamless Attendance</h2>
                <div className="flex flex-col gap-2 mt-[1rem]">
                  <ul className="text-lg space-y-2">
                    <li className="flex gap-5 items-stretch">
                      <RiCheckboxFill
                        className="min-w-[1.5rem] mt-2"
                        size={20}
                      />
                      <span>
                        <b>AI-Powered Face Recognition:</b> Automates attendance
                        tracking using advanced face detection algorithms.
                      </span>
                    </li>

                    <li className="flex gap-5 items-stretch">
                      <RiCheckboxFill
                        className="min-w-[1.5rem] mt-2"
                        size={20}
                      />
                      <span>
                        <b>Real-Time Verification:</b> Instantly verifies
                        student presence in both virtual and physical
                        classrooms.
                      </span>
                    </li>

                    <li className="flex gap-5 items-stretch">
                      <RiCheckboxFill
                        className="min-w-[1.5rem] mt-2"
                        size={20}
                      />
                      <span>
                        <b>Time-Saving:</b> Eliminates manual attendance taking,
                        freeing up valuable classroom time.
                      </span>
                    </li>

                    <li className="flex gap-5 items-stretch">
                      <RiCheckboxFill
                        className="min-w-[1.5rem] mt-2"
                        size={20}
                      />
                      <span>
                        <b>Prevents Proxy Attendance:</b> Ensures authenticity,
                        avoiding any chances of proxy attendance.
                      </span>
                    </li>

                    <li className="flex gap-5 items-stretch">
                      <RiCheckboxFill
                        className="min-w-[1.5rem] mt-2"
                        size={20}
                      />
                      <span>
                        <b>Integration with Class Records:</b> Automatically
                        logs attendance into the system for easy tracking and
                        reporting.
                      </span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="link"
                  className="absolute bottom-[1.5rem] left-[2.5rem] flex gap-2 text-lg items-center justify-start px-0"
                >
                  Learn More <RiExternalLinkLine size={20} />
                </Button>
              </div>
              <div className="relative bg-[url('/box-bg-2.png')] w-[36rem] h-[34rem] bg-contain bg-no-repeat mt-4 py-7 px-7 flex flex-col gap-4">
                <h2 className="text-3xl">Better Collaboration</h2>
                <ul className="text-lg space-y-2 mt-[1rem]">
                  <li className="flex gap-5 items-stretch">
                    <RiCheckboxFill className="min-w-[1.5rem] mt-2" size={20} />
                    <span>
                      <b>Shared Digital Workspaces:</b> Allows students and
                      professors to collaborate in real-time on projects and
                      assignments.
                    </span>
                  </li>

                  <li className="flex gap-5 items-stretch">
                    <RiCheckboxFill className="min-w-[1.5rem] mt-2" size={20} />
                    <span>
                      <b>Interactive Communication Tools:</b> Integrated chat
                      rooms and forums for discussions, group work, and doubt
                      clarification.
                    </span>
                  </li>

                  <li className="flex gap-5 items-stretch">
                    <RiCheckboxFill className="min-w-[1.5rem] mt-2" size={20} />
                    <span>
                      <b>Real-Time Feedback:</b> Professors can provide
                      immediate feedback on assignments, projects, or queries.
                    </span>
                  </li>

                  <li className="flex gap-5 items-stretch">
                    <RiCheckboxFill className="min-w-[1.5rem] mt-2" size={20} />
                    <span>
                      <b>Group Discussions & Polls:</b> Facilitates group
                      interactions through polls, quizzes, and live discussion
                      threads.
                    </span>
                  </li>
                </ul>

                <Button
                  variant="link"
                  className="absolute bottom-[1.5rem] left-[2.5rem] flex gap-2 text-lg items-center justify-start px-0"
                >
                  Learn More <RiExternalLinkLine size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-[-25rem] w-full">
            <div className="bg-[url('/box-bg-3.png')] w-[60rem] h-[30rem] bg-contain bg-no-repeat ml-[40rem]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

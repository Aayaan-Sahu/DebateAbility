"use client";

import Image from "next/image";

export default function Intro() {
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="transform transition-transform duration-200 hover:rotate-6">
        <Image
          src="/assets/debateability.svg"
          height={300}
          width={300}
          alt="DebateAbility Logo"
        />
      </div>
      <div className="px-16">
        <h1 className="font-thin text-7xl py-1">
          Hi, We&apos;re{" "}
          <span className="underline-animation hover:text-purple-500 duration-100 ease-in-out">
            DebateAbility
          </span>
        </h1>
        <p className="text-xl pb-16">
          A non-profit dedicated to making debate accessible and fun
        </p>
        <div className="flex flex-row items-center space-x-4">
          <p className="text-lg">
            Sign up for our new online camp for free!
          </p>
          <a
            href="#signup"
            onClick={(e) => handleNavigation(e, "signup")}
          >
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full animate-moveUpDown">
              Click me!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

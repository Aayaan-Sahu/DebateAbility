import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-wrap items-center justify-between py-8 px-32 font-semibold text-lg">
      <div>
        <div className="flex flex-row items-center">
          <Image
            src="/assets/debateability.svg"
            height={25}
            width={25}
            alt="DebateAbility Logo"
          />
          <p className="px-2">DebateAbility 2024</p>
        </div>
        <p className="text-sm">Designed by Aayaan Sahu with ❤️</p>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link target="_blank" href="mailto:mukilan.rajasekar@gmail.com">
          <p className="hover:text-purple-500 duration-100 ease-in-out">EMAIL</p>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/debate_ability/">
          <p className="hover:text-purple-500 duration-100 ease-in-out">
            INSTAGRAM
          </p>
        </Link>
      </div>
    </div>
  );
}

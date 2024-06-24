import { Metadata } from "next";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import OurTeam from "./components/our_team";
import Who from "./components/who";
import Contact from "./components/contact";
import Signup from "./components/signup";
import { MemberData } from "./lib/utils";
import fs from "fs";

export const metadata: Metadata = {
  title: "DebateAbility",
  description: "DebateAbility Home Page",
};

function returnMemberData() {
  const teamMembers = [
    "aayaan",
    "aarya",
    "mukilan",
    "dhruv",
    "chaith",
    "naveen",
    "maanika",
    "sudhanva",
  ];
  let membersData = new Map<string, MemberData>();
  teamMembers.forEach((member) => {
    const currentMemberData = JSON.parse(
      fs.readFileSync(
        process.cwd() + `/public/team-descriptions/${member}.json`,
        "utf-8",
      ),
    );
    membersData.set(member, {
      name: currentMemberData.name,
      emoji: currentMemberData.emoji,
      title: currentMemberData.title,
      description: currentMemberData.description,
      pathToImage: member,
    });
  });
  return membersData;
}

export default function Main() {
  const membersData = returnMemberData();
  return (
    <div className="font-mulish">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <Intro />
      </div>
      <div id="who" className="min-h-screen px-32">
        <Who />
      </div>
      <div id="team" className="min-h-screen px-32">
        <OurTeam membersData={membersData} />
      </div>
      <div id="signup" className="px-32">
        <Signup />
      </div>
      <div id="contact" className="">
        <Contact />
      </div>
    </div>
  );
}

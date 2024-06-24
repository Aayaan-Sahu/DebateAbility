import { MemberData } from "../lib/utils";
import Person from "./person";

export default function OurTeam(
  { membersData }: { membersData: Map<string, MemberData> },
) {
  return (
    <div className="flex flex-row pt-16">
      <div>
        <h1 className="font-thin text-7xl text-purple-500">Our</h1>
        <h1 className="font-thin text-7xl text-purple-500">Team</h1>
      </div>
      <div className="px-8 lg:px-28 items-center justify-center py-8">
        {Array.from(membersData.entries()).map((
          [key, value]: [string, MemberData],
        ) => (
          <div className="py-4" key={key}>
            <Person
              name={value.name}
              emoji={value.emoji}
              title={value.title}
              description={value.description}
              pathToImage={value.pathToImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

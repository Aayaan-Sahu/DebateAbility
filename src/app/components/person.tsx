import Image from "next/image";

export default function Person(
  { name, emoji, title, description, pathToImage }: {
    name: string;
    emoji: string;
    title: string;
    description: string;
    pathToImage: string;
  },
) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row">
        <div>
          <Image
            src={`/team-pictures/${pathToImage}.png`}
            height={1200}
            width={1200}
            alt={pathToImage}
          />
        </div>
        <div className="px-8">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="text-3xl font-light text-purple-500">
              {name}
            </h1>
            <div className="transform transition-transform duration-100 hover:rotate-6 text-3xl">
              {emoji}
            </div>
          </div>
          <p className="font-light">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

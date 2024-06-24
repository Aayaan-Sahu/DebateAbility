import Image from "next/image";

export default function Who() {
  return (
    <div className="flex flex-row pt-16">
      <div>
        <h1 className="font-thin text-7xl text-purple-500">Who are we?</h1>
      </div>
      <div className="flex flex-col px-8 lg:px-32 items-center justify-center py-8">
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
        <Image
          src={"/assets/debate-at-milikin.jpg"}
          width={600}
          height={600}
          alt="Debate at Milikin"
          className="py-8 lg:py-16"
        />
      </div>
    </div>
  );
}

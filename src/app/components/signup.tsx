import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-row py-16 items-center">
      <div>
        <h1 className="font-thin text-7xl text-purple-500">Sign Up</h1>
      </div>
      <div className="flex flex-col px-8 lg:px-32 items-center justify-center py-8">
        <div className="flex flex-row">
          <p>
            Sign up for our camp it&apos;s really cool. Here&apos;s some more information about it. If you would like to join, please join right over <Link target="_blank" href="https://www.google.com" className="text-purple-500 font-semibold">here</Link>!
          </p>
        </div>
      </div>
    </div>
  );
}

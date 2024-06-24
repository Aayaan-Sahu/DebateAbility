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
            Sign up for our camp it&apos;s really cool. Here&apos;s some more
            information about it. If you would like to join, please join right
            over{" "}
            <Link
              target="_blank"
              href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScGFrUsJHxN36Z7CRu4vnW3vNPmuhGgITwiEvim2OKN80xHRA%2Fviewform%3Fusp%3Dsf_link&e=AT2QuYhtNpfDDK6OetDouq_ddoeNTaEPNI53PASWW-9h6Ap7YfQTUkcFhidF0qKrQ5lmxnW3Nmq5QlNjS2cQcwAVR-HT2rfSFqObqAQ"
              className="text-purple-500 font-semibold"
            >
              here
            </Link>!
          </p>
        </div>
      </div>
    </div>
  );
}

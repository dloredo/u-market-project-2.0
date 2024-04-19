import Link from "next/link";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="w-full border-b border-white shadow-1">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 lg:px-10">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Desktop logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="rounded-full border border-white px-5 py-2 shadow-4">
          <h1>Hello from the search</h1>
        </div>
        <div className="rounded-full border border-white px-5 py-2 shadow-4">
          <h1>{user?.email}</h1>
        </div>
      </div>
    </nav>
  );
}

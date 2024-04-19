import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata: Metadata = {
  title: "U Market",
  description: "Hola",
};

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <Navbar />
      {user ? (
        <LogoutLink className="mr-4 w-full">Logout</LogoutLink>
      ) : (
        <>
          <LoginLink className="mr-4 w-full">Login</LoginLink>
          <RegisterLink className="w-full ">Register</RegisterLink>
        </>
      )}
    </>
  );
}

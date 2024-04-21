import ECommerce from "@/components/Dashboard/E-commerce";
import { GetServerSidePropsContext, Metadata } from "next";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Panel de negocios",
  description: "Administrar negocios",
};

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <DefaultLayout
        id={user.id as string}
        name={user.given_name as string}
        email={user.email as string}
        image={user.picture as string}
      >
        <p>Businees prueba </p>
      </DefaultLayout>
    </>
  );
}

import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Panel de administracion",
  description: "Administrar negocios",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>Hola</h1>
      </DefaultLayout>
    </>
  );
}

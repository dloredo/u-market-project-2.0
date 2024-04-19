import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Panel de negocios",
  description: "Administrar negocios",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>Businees prueba</p>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}

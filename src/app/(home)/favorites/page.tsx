import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "../components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Inicio home",
  description: "Hola",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div>Productos favoritos</div>
      </DefaultLayout>
    </>
  );
}

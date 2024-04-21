import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { Suspense } from "react";
import Loader from "@/components/common/Loader";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/db";

async function getData(userId: string) {
  const data = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const data = await getData(user.id);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {data?.role === "business" ? (
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </div>
        ) : data?.role === "admin" ? (
          redirect("/dashboard")
        ) : (
          redirect("/")
        )}
      </body>
    </html>
  );
}

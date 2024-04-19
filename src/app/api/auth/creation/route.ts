import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        id: user.id,
        profileImage: user.picture ?? "",
      },
    });
  }
  if (dbUser.role === "user") {
    return NextResponse.redirect("http://localhost:3000");
  } else if (dbUser.role === "admin") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  } else if (dbUser.role === "business") {
    return NextResponse.redirect("http://localhost:3000/business");
  }
}

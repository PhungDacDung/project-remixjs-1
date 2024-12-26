import { json } from "@remix-run/react";
import prisma from "~/client";

export const loader = async () => {
  const session = await prisma.session.findFirst({

  })
  return json([
    { id: "1", name: "Pants" },
    { id: "2", name: "Jacket" },
  ]),
    session
};
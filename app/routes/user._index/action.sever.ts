import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import prisma from "~/client";


export default async function ActionUser({ request, params }: ActionFunctionArgs) {

    const formData = await request.formData();
    const action = formData.get("action");

    switch (action) {
        case "edit":
            {
                const idEdit = formData.get("idEdit") as string;
                if (idEdit) {

                    const name = formData.get("name");
                    const password = formData.get("password");

                    const updatedUser = await prisma.user.update({
                        where: {
                             id: parseInt(idEdit) 
                        },
                        data: {
                            name: name,
                            password: password
                        }
                    });

                    if(updatedUser){
                        redirect("/user")
                    }
                }

                break;
            }

        case "delete":
            {
                const id = formData.get("id") as string;
                if (id) {
                    const user = await prisma.user.findFirst({ where: { id: parseInt(id) } });
                    if (user) {
                        await prisma.user.delete({
                            where: {
                                id: user.id
                            }
                        });

                    }
                }
                break;
            }
    }

    return null;


}
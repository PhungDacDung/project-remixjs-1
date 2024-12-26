import { ActionFunctionArgs, json } from "@remix-run/node";
import prisma from "~/client";


export default async function ActionLogin ({request, params}: ActionFunctionArgs) {

    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    

    try {
        const user = await prisma.user.findFirst({where:{email}})
        if(user){
            if(user.password === password){
                return {
                    "message" : "success",
                }
            }
            else{
                return {
                    "message" : "wrong password",
                }
            }
        }
        else{
            return {
                "message" : "Wrong email or password",
            }

        }
        
    } catch (error:any) {
        return error.message;
    }

}
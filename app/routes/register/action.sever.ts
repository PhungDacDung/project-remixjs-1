import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import prisma from "~/client";



export default async function ActionRegister({request}:ActionFunctionArgs){
    const form = await request.formData()
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    try {
        const newUser = await prisma.user.create({
            data:{
                "name": name,
                "email":email,
                "password":password
            }
        })
        return {
            "state": "success"
        };
        
    } catch (error:any) {

        const res = {
            "error" :  true,
            "message": error.message,
        };

        return {
            "state" : "error",
            "message" : error.message,
        }
        
    }

    return null
    
}
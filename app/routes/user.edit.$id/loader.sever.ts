import prisma from "~/client"
import { LoaderFunction, redirect } from "@remix-run/node";




export const loader:LoaderFunction = async ({request, params}) =>{
   
    try {
        if(params.id) {
            const userEdit = await prisma.user.findFirst({
                where: {id:parseInt(params?.id)}
            })
           
            return userEdit;
        }    

    } catch (error:any) {
        return error.message;
        
    }
   return null;
}
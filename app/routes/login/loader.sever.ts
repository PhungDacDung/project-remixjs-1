import prisma from "~/client"
import ActionLogin from "./action.sever";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { LoaderFunction } from "@remix-run/node";

export const action = ActionLogin


export const loader:LoaderFunction = async (request) =>{
 
    console.log(request.context);
    
    
    const user = await prisma.user.findMany({});
    //console.log("check loader",user);
    
    return user
}
import prisma from "~/client"



export const loadAllUser = async () =>{

    const users = await prisma.user.findMany({});

  
    return users;
}
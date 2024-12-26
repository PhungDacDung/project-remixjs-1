import { useFetcher, useLoaderData } from "@remix-run/react"
import { loadAllUser } from "./loader.sever"
import Navbar from "~/components/Navbar";
import actionSever from "./action.sever";


export const loader = loadAllUser
export const action = actionSever;


export default function User() {

    const listUser = useLoaderData<typeof loader>()

    const handleDelete = (id:number) =>{
        const formData = new FormData();

        formData.append("action","delete");
        formData.append("id",String(id));
        
        fetcher.submit(formData,{method:"POST"});
        
    }

    const fetcher = useFetcher();
   

    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Name
                                    <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg></a>
                                </div>
                            </th>

                          
                            <th scope="col" className="px-6 py-4 text-right">
                                    Actions
                               
                            </th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 && listUser.map((item: any, index: any) => {

                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        {item.id}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.email}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href={`user/edit/${item.id}`} className="me-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>

                                        <a onClick={()=>{handleDelete(item.id)}} className="ms-2 text-red-600 font-medium text-blue-600 dark:text-blue-500 hover:underline ">Delete</a>
                                    </td>
                                </tr>

                            )

                        })}

                    </tbody>
                </table>
            </div>

        </>
    )

}
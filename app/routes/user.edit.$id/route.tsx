
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import { loader as loaderSever } from "./loader.sever";
import actionSever from "../user._index/action.sever";

export const loader = loaderSever;
export const action = actionSever;


export default function App() {

    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const user = useLoaderData<typeof loader>();
    const fetcher = useFetcher();

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
    },[user])
    

    const handleEditUser = () =>{
        const formData = new FormData();

        formData.append("action", "edit");
        formData.append("idEdit",String(user.id))
        formData.append("name",name);
        formData.append("password",password);

        fetcher.submit(formData,{method:"POST"});
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Update User
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="text" 
                                    name="name" id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Harry Potter" required={true} 
                                    value={name}
                                    onChange={(event)=>{setName(event.target.value)}}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@company.com" required={true}
                                    disabled
                                    value={email}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    required={true} 
                                    value={password}
                                    onChange={(event)=>{setPassword(event.target.value)}}
                                    />
                                </div>

                                <button type="submit" 
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={handleEditUser}
                                >Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
   /*  useEffect(() => {
        console.log(products)
    }, []);
    
    const fetcher = useFetcher();

    const handleCheck = useCallback(() => {
        const formData = new FormData();
        formData.append('action', 'check');
        fetcher.submit(formData, { method: 'POST' });
    }, []);

    useEffect(() => {
        if (fetcher.data) {
            // do something
            console.log('fetcher.data', fetcher.data)
        }
    }, [fetcher.data])
    return (
        <div>
            <button onClick={handleCheck}>
                abc
            </button>
        </div>
    ) */
}
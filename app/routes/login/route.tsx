import { useCallback, useEffect, useState } from "react"
import { useFetcher, useNavigate } from "react-router-dom"
import ActionLogin from "./action.sever"
import { loader as LoaderSever } from "./loader.sever"
import { redirect, useLoaderData } from "@remix-run/react"

export const action = ActionLogin
export const loader = LoaderSever

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = useLoaderData<typeof loader>();
    console.log(user);


    const navigate = useNavigate()
    const fetcher = useFetcher();

     const handleSubmit = useCallback(() => {
         const formData = new FormData()
         formData.append('email', email);
         formData.append('password', password);
         console.log("check have callback");
 
         fetcher.submit(formData, { method: 'POST' });
     }, [email,password])


   /*  const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', email);
        formData.append('password', password);

        fetcher.submit(formData, { method: 'POST' });

        console.log("check no callback");
        
    } */

    useEffect(() => {
        if (fetcher.data) {
            console.log("there");
            
            if(fetcher.data.message === "success"){
                navigate("/")
            }
            else{
                console.log("erorr: ",fetcher.data.message);
                
            }
        }

    }, [fetcher.data])

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email" name="email" id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={false}
                                        value={email}
                                        onChange={(event) => { setEmail(event.target.value) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}
                                        value={password}
                                        onChange={(event) => { setPassword(event.target.value) }}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button onClick={handleSubmit} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
} 
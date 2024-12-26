
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useCallback, useEffect } from "react";
import { loader as loaderSever } from "./loader.sever";
import actionSever from "./action.sever";

export const loader = loaderSever;
export const action = actionSever;
export default function App() {
    const products = useLoaderData<typeof loader>();
    
    useEffect(() => {
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
    )
}

import { ActionFunctionArgs, json, redirect } from "@remix-run/node";

export default async function ({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const action = formData.get('action');
    console.log('action', action);
    return json({
        action,
        message: 'success'
    })
    return null
}
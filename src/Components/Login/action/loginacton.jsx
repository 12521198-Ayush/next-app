"use server"

import { auth, signIn } from "../../../app/auth"
import { AuthError } from "next-auth"

export async function loginaction(formdata) {

    try {
        await signIn("credentials", {
            username: formdata.username,
            password: formdata.password,
            redirectTo: "/"
        });
    } catch (error) {
        console.log(error);
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials" };
                case "NEXT_REDIRECT":
                    return { error: "NEXT_REDIRECT" };
                default:
                    return { error: "Invalid ID or Password" };
            }
        }
        throw error;
    }


}
'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut } from "@/firebase/auth";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])

    const handleSignOut = async (event) => {
        event.preventDefault()

        const { result, error } = await signOut();

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/signin")
    }

    return (
        <div className="p-4">
            <h1>Only logged in users can view this page</h1>
            <a href="#!" onClick={()=> router.push("/signin")} className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign out</a>
        </div>
    );
}

export default Page;
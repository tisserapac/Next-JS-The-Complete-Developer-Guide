'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
    console.log("Editing snippet with ID:", id, "and code:", code);
    await db.snippet.update({
        where: { id },
        data: { code },
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    console.log("Deleting snippet with ID:", id);
    await db.snippet.delete({
        where: { id },
    });

    revalidatePath("/");

    redirect("/");
}

export async function createSnippet(formState: { message: string }, formData: FormData) {

    try {
        // Check user input is valid
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 3) {
            return { message: "Title must be longer" };
        }

        if (typeof code !== "string" || code.length < 3) {
            return { message: "Code must be longer" };
        }

        //Create a new snippet
        await db.snippet.create({
            data: {
                title,
                code,
            },
        });

        //throw new Error("Snippet created successfully!");

        //console.log("Snippet created:", { title, code });
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            return { message: err.message };
        } else {
            return {
                message: "An unknown error occurred while creating the snippet."
            }

        }

    }

    revalidatePath("/");

    //Redirect user back to the root page
    redirect("/");

}
import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //This is s server action
    "use server";

    // Check user input is valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //Create a new snippet
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    // console.log("Snippet created:", { title, code });

    //Redirect user back to the root page
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold ms-3">Create Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code">Code</label>
          <textarea
            id="code"
            name="code"
            className="border rounded p-2 w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-200 rounded p-2">
          Create
        </button>
      </div>
    </form>
  );
}

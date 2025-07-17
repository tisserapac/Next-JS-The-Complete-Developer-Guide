"use client";

import { useActionState } from "react";
import * as actions from "@/actions";

export default function SnippetCreatePage() {
  const [formState, action] = useActionState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
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

        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className="bg-blue-200 rounded p-2">
          Create
        </button>
      </div>
    </form>
  );
}

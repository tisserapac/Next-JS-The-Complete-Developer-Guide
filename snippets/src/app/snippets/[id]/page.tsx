import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import * as actions from "@/actions";

// interface SnippetShowPageProps {
//   params: {
//     id: string;
//   };
// }

interface SnippetShowPageProps {
  params: Promise<{ id: string }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h1 className="text-xl text-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 border rounded border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }));
}

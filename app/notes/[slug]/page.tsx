import { getNoteBySlugServer } from "@/app/lib/mockDatabase";

export default async function NotePage({
  params,
}: {
  params: { slug: string };
}) {
  const note = await getNoteBySlugServer(params.slug);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Note: {note?.title}</h1>
    </div>
  );
}

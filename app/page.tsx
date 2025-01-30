import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">NoeTree</h1>
      <Link className="underline" href="/notes">Notes</Link>
    </div>
  );
}

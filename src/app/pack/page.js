import { packs } from "@/data/packs";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-2">
      <center className="text-3xl">Our Package</center>
      {packs.map((i) => (
        <div className="hover:bg-amber-200 p-4">
          <Link href={`/pack/${i.id}`} key={i.id}>
            <p>{i.title}</p>
            <p>{i.desc}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}

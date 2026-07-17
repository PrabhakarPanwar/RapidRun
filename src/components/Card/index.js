import { packs } from "@/data/packs";
import Link from "next/link";

export default function Card() {
  return (
    <main className="w-[80vw] py-5 flex flex-wrap mx-auto gap-3">
      {packs.map((i) => (
        <div className="h-30 w-50 flex rounded-lg overflow-hidden shadow-md">
          <Link href={`/pack/${i.id}`} key={i.id} className="flex gap-2">
            <div className="flex-1">
              <img className="h-full w-full" src={i.img} alt={i.title} />
            </div>
            <div className="flex-1">
              <p className="text-red-600">{i.tag}</p>
              <p>{i.title}</p>
              <p>{i.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}

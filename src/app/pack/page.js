import { packs } from "@/data/packs";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-[#F7F3EC] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h1
          className="text-2xl sm:text-3xl font-semibold text-[#0B2E33] text-center"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Our Packages
        </h1>
        <p className="mt-2 text-sm text-[#5C6B6C] text-center">
          Pick a run that matches your pace, from calm floats to class IV
          whitewater.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((i) => (
            <Link
              href={`/pack/${i.id}`}
              key={i.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D8CBB8] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0B2E33]/5">
                <img
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={i.img}
                  alt={i.title}
                />
              </div>

              <div className="p-5">
                <span className="inline-block text-xs font-medium tracking-wide uppercase text-[#3E7C7C] bg-[#3E7C7C]/10 px-2.5 py-1 rounded-full">
                  Rafting pack
                </span>

                <p
                  className="mt-3 text-lg font-semibold text-[#0B2E33]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {i.title}
                </p>

                <p className="mt-1.5 text-sm text-[#1B1B1B]/70 leading-relaxed line-clamp-2">
                  {i.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-base font-semibold text-[#0B2E33]">
                    <span className="text-[#5C6B6C] font-normal text-sm">
                      from{" "}
                    </span>
                    ₹{i.tag}
                  </p>
                  <span className="text-sm font-medium text-[#F97316] group-hover:underline">
                    Book now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

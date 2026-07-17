import TrustSection from "@/components/TrustSection/page";
import { packs } from "@/data/packs";
import Link from "next/link";

function getPost(id) {
  return packs.find((item) => item.id == id) || null;
}

export default async function Page({ params }) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <p
          className="text-2xl font-semibold text-[#0B2E33]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Pack not found
        </p>
        <p className="mt-2 text-sm text-[#5C6B6C]">
          This rafting pack may have been removed or doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-[#F97316] text-[#4A1B0C] font-medium px-6 py-3 rounded-lg hover:brightness-95 transition"
        >
          Back to all packs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F3EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <Link
          href="/"
          className="text-sm font-medium text-[#3E7C7C] hover:underline"
        >
          ← Back to all packs
        </Link>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Image */}
          <div className="lg:col-span-3">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#D8CBB8]">
              <img
                className="h-full w-full object-cover"
                src={post.img}
                alt={post.title}
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="inline-block w-fit text-xs font-medium tracking-wide uppercase text-[#3E7C7C] bg-[#3E7C7C]/10 px-2.5 py-1 rounded-full">
              Rafting pack
            </span>

            <h1
              className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#0B2E33] leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {post.title}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-[#1B1B1B]/80">
              {post.desc}
            </p>

            {post.about && (
              <div className="mt-10 bg-white border border-[#D8CBB8] rounded-2xl p-6 sm:p-8">
                <h2
                  className="text-xl sm:text-2xl font-semibold text-[#0B2E33]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  About this run
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#1B1B1B]/70 max-w-3xl">
                  {post.about}
                </p>
              </div>
            )}
            <div className="mt-6 bg-white border border-[#D8CBB8] rounded-2xl p-5">
              <p className="text-sm text-[#5C6B6C]">Starting at</p>
              <p className="text-3xl font-semibold text-[#0B2E33] mt-1">
                ₹{post.tag}
                <span className="text-sm font-normal text-[#5C6B6C]">
                  {" "}
                  / person
                </span>
              </p>

              <button className="mt-5 w-full bg-[#F97316] text-[#4A1B0C] font-medium py-3 rounded-lg hover:brightness-95 transition">
                Book this run
              </button>
              <button className="mt-2 w-full border border-[#0B2E33]/20 text-[#0B2E33] font-medium py-3 rounded-lg hover:bg-[#0B2E33]/5 transition">
                Ask a question
              </button>
            </div>
          </div>
        </div>
      </div>
      <TrustSection />
    </div>
  );
}

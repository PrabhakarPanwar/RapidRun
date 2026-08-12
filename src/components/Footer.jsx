import { navLinks } from "@/data/packs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B2E33] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="max-w-sm">
          <h2
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Rapid<span className="text-[#F97316]">Run</span>
          </h2>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Whitewater rafting trips down the river's best rapids. Book your run
            and chase the current.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-white/80 transition-colors hover:text-[#F97316] group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[1.5px] bg-[#F97316] w-0 transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} RapidRun Rafting Co. All rights
            reserved.
          </p>
          <p>Find us on the river — book season runs year-round.</p>
        </div>
      </div>
    </footer>
  );
}

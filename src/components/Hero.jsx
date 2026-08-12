export default function Hero() {
  return (
    <section className="bg-[#F7F3EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block text-xs font-medium tracking-wide uppercase text-[#3E7C7C] bg-[#3E7C7C]/10 px-3 py-1 rounded-full mb-4">
            Now booking summer runs
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0B2E33] leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Chase the rapids.
            <br />
            Rest by the river.
          </h1>

          <p className="mt-4 md:mt-5 text-sm sm:text-base leading-relaxed text-[#1B1B1B]/80 max-w-md mx-auto md:mx-0">
            Whitewater rafting trips down the river's best rapids, with
            riverside stays coming soon so you can settle in after the run.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <button className="bg-[#F97316] text-[#4A1B0C] font-medium px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:brightness-95 transition">
              Book your Adventure
            </button>
            {/* <button className="border border-[#0B2E33]/20 text-[#0B2E33] font-medium px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#0B2E33]/5 transition">
              Explore hotels
            </button> */}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8CBB8]">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/originals/b9/17/fd/b917fdc63744ad30426969f6d5402ce8.jpg"
              alt="Rafters navigating whitewater rapids"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

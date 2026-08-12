export default function TrustSection() {
  return (
    <section className="bg-[#F7F3EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* Why choose us */}
        <div>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#0B2E33] text-center"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Why choose RapidRun
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-[#D8CBB8] rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#3E7C7C]/10 flex items-center justify-center mx-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3E7C7C]" />
              </div>
              <p className="mt-4 font-semibold text-[#0B2E33]">
                Experienced guides
              </p>
              <p className="mt-1.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
                Certified river guides with years on these exact rapids.
              </p>
            </div>
            <div className="bg-white border border-[#D8CBB8] rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#3E7C7C]/10 flex items-center justify-center mx-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3E7C7C]" />
              </div>
              <p className="mt-4 font-semibold text-[#0B2E33]">Safety first</p>
              <p className="mt-1.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
                Top-grade gear, safety briefings, and small group sizes.
              </p>
            </div>
            <div className="bg-white border border-[#D8CBB8] rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#3E7C7C]/10 flex items-center justify-center mx-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3E7C7C]" />
              </div>
              <p className="mt-4 font-semibold text-[#0B2E33]">Easy booking</p>
              <p className="mt-1.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
                Book in minutes, reschedule easily if plans change.
              </p>
            </div>
          </div>
        </div>

        {/* Services available */}
        <div className="mt-14">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#0B2E33] text-center"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            What's included
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Certified guide",
              "Safety gear & helmets",
              "Life jackets",
              "Pickup & drop",
              "Changing rooms",
              "Bottled water",
              "Photos on request",
              "First aid on site",
            ].map((service) => (
              <div
                key={service}
                className="bg-white border border-[#D8CBB8] rounded-xl p-4 flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E7C7C] shrink-0" />
                <p className="text-sm text-[#0B2E33] font-medium leading-snug">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation & refund policy */}
        <div className="mt-14 bg-white border border-[#D8CBB8] rounded-2xl p-6 sm:p-8">
          <p
            className="text-lg font-semibold text-[#0B2E33]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Cancellation & refund policy
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7C7C] mt-1.5 shrink-0" />
              Free cancellation up to 48 hours before your run for a full
              refund.
            </li>
            <li className="flex gap-2.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7C7C] mt-1.5 shrink-0" />
              Cancellations within 48 hours are eligible for rescheduling but
              are not refundable.
            </li>
            <li className="flex gap-2.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7C7C] mt-1.5 shrink-0" />
              Trips may be rescheduled by our team due to unsafe water or
              weather conditions, at no cost to you.
            </li>
            <li className="flex gap-2.5 text-sm text-[#1B1B1B]/70 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7C7C] mt-1.5 shrink-0" />
              Refunds are processed within 5–7 business days to the original
              payment method.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

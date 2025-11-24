import Section from '../layout/Section'
import CountUp from '../animations/CountUp'
import { impactMetrics } from '../../data/metrics'

export default function Impact() {
  return (
    <Section className="py-20 md:py-24 bg-gradient-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27] relative overflow-hidden">
      {/* Gradient accent elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF9500]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00C2FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Measurable Impact Across Your Portfolio
        </h2>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-[#1A1F3A]/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#FF9500]/50 hover:shadow-lg hover:shadow-[#FF9500]/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF9500] to-[#FFB800] bg-clip-text text-transparent">
                <CountUp value={metric.value} />
              </div>
              <div className="text-white/80 text-lg font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#1A1F3A]/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <p className="text-xl text-white/90 italic mb-4">
              "Sunlight Analytics transformed how we operate our 200MW portfolio. We've reduced O&M costs by 30% and recovered over $2M in lost revenue in the first year alone."
            </p>
            <div className="text-white/70">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm">VP of Operations, Solar Energy Partners</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}


import Section from '../layout/Section'
import Card from '../ui/Card'
import { differentiators } from '../../data/differentiators'

export default function SolutionOverview() {
  return (
    <Section className="py-20 md:py-24 bg-[#1A1F3A]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Transform Raw Data Into Real-Time Intelligence
        </h2>
        
        <p className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-16">
          Sunlight Analytics unifies data from all your sources—SCADA systems, weather stations, sensors, and more—into a single AI-powered platform that delivers accurate forecasts, detects issues before they impact revenue, and optimizes every aspect of your solar operations.
        </p>

        {/* Data Flow Diagram */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Input Sources */}
            <div className="flex flex-col gap-4">
              <div className="text-center mb-2">
                <p className="text-sm text-white/60 mb-2">Input Sources</p>
              </div>
              <Card className="bg-[#0A0E27] border border-white/10 rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">📡</div>
                <p className="text-sm text-white/80">SCADA</p>
              </Card>
              <Card className="bg-[#0A0E27] border border-white/10 rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">🌤️</div>
                <p className="text-sm text-white/80">Weather</p>
              </Card>
              <Card className="bg-[#0A0E27] border border-white/10 rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm text-white/80">Sensors</p>
              </Card>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#FF9500] to-[#FFB800]"></div>
              <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-[#FF9500] to-[#FFB800]"></div>
              <div className="w-0 h-0 border-l-8 border-l-[#FFB800] border-t-4 border-t-transparent border-b-4 border-b-transparent md:border-l-0 md:border-t-8 md:border-t-[#FFB800] md:border-l-4 md:border-l-transparent md:border-r-4 md:border-r-transparent"></div>
            </div>

            {/* Platform */}
            <Card className="bg-gradient-to-br from-[#FF9500]/20 to-[#FFB800]/20 border-2 border-[#FF9500]/50 rounded-lg p-8 text-center min-w-[200px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500]/10 to-[#FFB800]/10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-3">⚡</div>
                <p className="text-xl font-bold text-white">Sunlight Platform</p>
                <p className="text-sm text-white/70 mt-2">AI Processing</p>
              </div>
            </Card>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="w-0 h-0 border-r-8 border-r-[#FFB800] border-t-4 border-t-transparent border-b-4 border-b-transparent md:border-r-0 md:border-b-8 md:border-b-[#FFB800] md:border-t-4 md:border-t-transparent md:border-l-4 md:border-l-transparent"></div>
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#FF9500] to-[#FFB800]"></div>
              <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-[#FF9500] to-[#FFB800]"></div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-4">
              <div className="text-center mb-2">
                <p className="text-sm text-white/60 mb-2">Outputs</p>
              </div>
              <Card className="bg-[#0A0E27] border border-white/10 rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">📈</div>
                <p className="text-sm text-white/80">Forecasts</p>
              </Card>
              <Card className="bg-[#0A0E27] border border-white/10 rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">💡</div>
                <p className="text-sm text-white/80">Insights</p>
              </Card>
              <Card className="bg-[#0A0E27] border border-white/10 rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">⚙️</div>
                <p className="text-sm text-white/80">Actions</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="bg-[#0A0E27] border border-white/10 rounded-lg p-6 hover:border-[#00C2FF]/50 hover:shadow-lg hover:shadow-[#00C2FF]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}


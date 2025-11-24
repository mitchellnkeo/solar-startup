import Button from '../ui/Button'
import MetricCard from '../ui/MetricCard'
import { heroMetrics } from '../../data/metrics'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]"></div>
        
        {/* Particle/Energy Flow Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF9500]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          AI that boosts solar output, lowers O&M costs, and unlocks hidden revenue from every asset you operate.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
          The AI-powered operations platform built for solar developers, EPCs, and asset owners who demand precision, reliability, and maximum returns.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Watch Demo</Button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#1A1F3A]/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroMetrics.map((metric, index) => (
              <MetricCard key={index} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


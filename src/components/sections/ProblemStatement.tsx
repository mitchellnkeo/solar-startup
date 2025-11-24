import Section from '../layout/Section'
import Card from '../ui/Card'
import { painPoints } from '../../data/painPoints'

export default function ProblemStatement() {
  return (
    <Section className="py-20 md:py-24 bg-[#0A0E27]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          The Solar Industry's Hidden Challenges
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-[#1A1F3A] border border-white/10 rounded-lg p-6 hover:border-[#FF9500]/50 hover:shadow-lg hover:shadow-[#FF9500]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {point.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}


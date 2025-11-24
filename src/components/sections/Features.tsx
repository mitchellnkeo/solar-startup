import Section from '../layout/Section'
import Card from '../ui/Card'
import { features } from '../../data/features'

export default function Features() {
  return (
    <Section className="py-20 md:py-24 bg-[#0A0E27]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Complete Platform for Solar Operations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#1A1F3A] border border-white/10 rounded-lg p-6 hover:border-[#FF9500]/50 hover:shadow-lg hover:shadow-[#FF9500]/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                {feature.description}
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide">
                  Benefits
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-white/70 flex items-start">
                      <span className="text-[#FF9500] mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}


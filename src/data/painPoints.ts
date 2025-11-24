export interface PainPoint {
  title: string
  description: string
  icon: string
}

export const painPoints: PainPoint[] = [
  {
    title: 'Forecasting Inaccuracy',
    description: 'Unreliable production forecasts lead to missed revenue opportunities and grid compliance issues.',
    icon: '📊',
  },
  {
    title: 'Grid Congestion Penalties',
    description: 'Unexpected curtailment and congestion charges eat into profitability without warning.',
    icon: '⚡',
  },
  {
    title: 'Asset Underperformance',
    description: 'Hidden inefficiencies and equipment failures go undetected, reducing overall portfolio returns.',
    icon: '🔧',
  },
  {
    title: 'Multi-Vendor Data Complexity',
    description: 'Fragmented data from multiple SCADA systems and vendors makes unified operations impossible.',
    icon: '🔗',
  },
]


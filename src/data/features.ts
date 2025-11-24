export interface Feature {
  title: string
  description: string
  benefits: string[]
  icon: string
}

export const features: Feature[] = [
  {
    title: 'AI-Powered Production Forecasting',
    description: 'High-accuracy forecasting using weather models, satellite data, and historical performance.',
    benefits: [
      'Boost market bidding precision',
      'Improve grid compliance',
      'Reduce imbalance penalties',
    ],
    icon: '🌤️',
  },
  {
    title: 'Predictive Maintenance & Fault Detection',
    description: 'Automated anomaly detection across all equipment to identify issues before they impact production.',
    benefits: [
      'Identify failures early',
      'Reduce truck rolls',
      'Extend asset lifecycle',
    ],
    icon: '🔍',
  },
  {
    title: 'Revenue Optimization Engine',
    description: 'ML models evaluate performance deviations to recover lost production and maximize revenue.',
    benefits: [
      'Quantify revenue leakage',
      'Prioritize actions',
      'Enable data-driven O&M',
    ],
    icon: '💰',
  },
  {
    title: 'Solar-Storage Optimization',
    description: 'AI optimizes charge/discharge cycles for hybrid assets to maximize profitability.',
    benefits: [
      'Maximize arbitrage',
      'Improve capacity value',
      'Increase profitability',
    ],
    icon: '🔋',
  },
  {
    title: 'Portfolio Intelligence Dashboard',
    description: 'Unified operational layer for multi-site management with standardized data and KPIs.',
    benefits: [
      'Standardize data',
      'Produce KPIs',
      'Support large-scale portfolios',
    ],
    icon: '📊',
  },
  {
    title: 'Automated Reporting & Compliance',
    description: 'Generate investor reports, ESG metrics, and compliance documents instantly.',
    benefits: [
      'Reduce manual processing',
      'Improve transparency',
      'Ensure compliance',
    ],
    icon: '📄',
  },
]


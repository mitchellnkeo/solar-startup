export interface Metric {
  value: string
  label: string
}

export const heroMetrics: Metric[] = [
  { value: '500+', label: 'MW Monitored' },
  { value: '98%', label: 'Forecast Accuracy' },
  { value: '30%', label: 'Cost Reduction' },
  { value: '$50M', label: 'Revenue Recovered' },
]

export const impactMetrics: Metric[] = [
  { value: '25-35%', label: 'Reduction in O&M Costs' },
  { value: '15-20%', label: 'Increase in Revenue Capture' },
  { value: '98%', label: 'Forecast Accuracy' },
  { value: '50%', label: 'Faster Fault Detection' },
]


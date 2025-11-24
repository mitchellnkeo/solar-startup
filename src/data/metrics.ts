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


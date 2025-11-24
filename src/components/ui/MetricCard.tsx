interface MetricCardProps {
  value: string
  label: string
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF9500] to-[#FFB800] bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-white/60 text-sm md:text-base mt-2">
        {label}
      </div>
    </div>
  )
}


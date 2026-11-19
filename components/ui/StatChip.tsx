import { cn } from '@/lib/utils'
import { GlassPanel } from './GlassPanel'
import { Sparkline } from './Sparkline'

interface StatChipProps {
  label: string
  value: string
  unit?: string
  icon?: React.ReactNode
  /** Decorative waveform beside the value. */
  spark?: 'pulse' | 'wave' | 'bars'
  className?: string
}

/** Glass tile: label + icon on top, waveform + bold value badge below. Only pass verified facts. */
export function StatChip({ label, value, unit, icon, spark = 'wave', className }: StatChipProps) {
  return (
    <GlassPanel className={cn('flex flex-col justify-between gap-4', className)}>
      <div className="flex items-center gap-3">
        {icon && (
          <span aria-hidden="true" className="text-xl text-cyan">
            {icon}
          </span>
        )}
        <p className="text-sm text-text-mid">{label}</p>
      </div>
      <div className="flex items-end justify-between gap-3">
        <Sparkline kind={spark} className="h-10 w-24 text-cyan" />
        <p className="rounded-[14px] bg-primary px-3 py-2 font-heading text-2xl font-extrabold leading-none text-text-on-primary">
          {value}
          {unit && <span className="ml-1 text-xs font-medium opacity-80">{unit}</span>}
        </p>
      </div>
    </GlassPanel>
  )
}

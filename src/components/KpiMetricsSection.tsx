import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';

interface KpiItem {
  value: string;
  badge?: {
    text: string;
    type: 'red' | 'green';
  };
  hasShield?: boolean;
  label: string;
}

const KPI_DATA: KpiItem[] = [
  {
    value: 'Mach 1+',
    label: 'LOITER VELOCITY',
  },
  {
    value: '0 RF',
    badge: {
      text: 'Tethered',
      type: 'red',
    },
    label: 'OPTICAL LINK',
  },
  {
    value: '20+ km',
    label: 'STRIKE RADIUS',
  },
  {
    value: 'MIL-STD',
    hasShield: true,
    label: 'EW RESILIENCE',
  },
];

export const KpiMetricsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-neutral-900 border-y border-neutral-200 py-12 sm:py-16 md:py-20 overflow-hidden select-none">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-center">
          {KPI_DATA.map((kpi, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} yOffset={20}>
              <div className="flex flex-col group">
                {/* Metric Value & Badges */}
                <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
                  <span
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-none group-hover:text-red-600 transition-colors duration-300"
                    style={{ color: '#030389' }}
                  >
                    {kpi.value}
                  </span>

                  {/* Red Tethered Badge */}
                  {kpi.badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-bold tracking-tight bg-red-950/10 text-red-600 border border-red-600/30">
                      {kpi.badge.text}
                    </span>
                  )}

                  {/* Green Shield Icon for MIL-STD */}
                  {kpi.hasShield && (
                    <span className="inline-flex items-center text-emerald-500">
                      <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-[2.2]" />
                    </span>
                  )}
                </div>

                {/* Metric Description Label */}
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 mt-2 sm:mt-3 block">
                  {kpi.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpiMetricsSection;

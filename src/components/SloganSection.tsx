import React from 'react';
import { ScrollReveal } from './effects/TextScrollEffects';

export const SloganSection: React.FC = () => {
  // Official green shade extracted from the SAG logo motto
  const LOGO_GREEN = '#046a38';
  const LOGO_GREEN_MUTED = 'rgba(4, 106, 56, 0.68)';

  return (
    <section
      aria-label="Sovereign Engineering Slogan"
      className="relative w-full border-y border-neutral-200 py-24 sm:py-32 lg:py-40 overflow-hidden select-none"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 text-center flex flex-col items-center">
        {/* Top Kicker Label - Revealing from Left */}
        <ScrollReveal direction="left" distance={45} blur={4}>
          <div className="mb-8 sm:mb-10 flex items-center justify-center">
            <span
              className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.32em] uppercase"
              style={{ color: LOGO_GREEN }}
            >
              MISSION DIRECTIVE
            </span>
          </div>
        </ScrollReveal>

        {/* Editorial Slogan with Left & Right scroll reveals */}
        <div className="w-full max-w-[1300px] mx-auto space-y-4 sm:space-y-6">
          {/* First clause: reveals from LEFT */}
          <ScrollReveal delay={0.1} direction="left" distance={70} blur={6}>
            <p
              className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] leading-[1.62] sm:leading-[1.55] md:leading-[1.48] tracking-[-0.015em] font-light"
              style={{ textWrap: 'balance' }}
            >
              <span className="block lg:inline">
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  Advanced engineering plays a{' '}
                </span>
                <strong
                  style={{ color: LOGO_GREEN }}
                  className="font-black tracking-[-0.01em]"
                >
                  pivotal
                </strong>
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  {' '}role in bridging the gap{' '}
                </span>
              </span>
              <span className="block lg:inline">
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  between{' '}
                </span>
                <strong
                  style={{ color: LOGO_GREEN }}
                  className="font-black tracking-[-0.01em]"
                >
                  conceptual innovation
                </strong>
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  {' '}and{' '}
                </span>
                <span className="whitespace-nowrap">
                  <strong
                    style={{ color: LOGO_GREEN }}
                    className="font-black tracking-[-0.01em]"
                  >
                    mission-ready capability
                  </strong>
                  <span style={{ color: LOGO_GREEN_MUTED }}>
                    ,
                  </span>
                </span>
              </span>
            </p>
          </ScrollReveal>

          {/* Second clause: reveals from RIGHT */}
          <ScrollReveal delay={0.2} direction="right" distance={70} blur={6}>
            <p
              className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] leading-[1.62] sm:leading-[1.55] md:leading-[1.48] tracking-[-0.015em] font-light"
              style={{ textWrap: 'balance' }}
            >
              <span className="block lg:inline">
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  transforming{' '}
                </span>
                <strong
                  style={{ color: LOGO_GREEN }}
                  className="font-black tracking-[-0.01em]"
                >
                  indigenous ideas
                </strong>
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  {' '}into{' '}
                </span>
                <strong
                  style={{ color: LOGO_GREEN }}
                  className="font-black tracking-[-0.01em]"
                >
                  reliable systems
                </strong>
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  {' '}
                </span>
              </span>
              <span className="block lg:inline">
                <span style={{ color: LOGO_GREEN_MUTED }}>
                  built for the demands of{' '}
                </span>
                <span className="whitespace-nowrap">
                  <strong
                    style={{ color: LOGO_GREEN }}
                    className="font-black tracking-[-0.01em]"
                  >
                    tomorrow’s battlefield
                  </strong>
                  <span style={{ color: LOGO_GREEN_MUTED }}>
                    .
                  </span>
                </span>
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Centered Accent Line underneath - Revealing from Right */}
        <ScrollReveal delay={0.25} direction="right" distance={40} blur={2}>
          <div
            className="w-24 sm:w-28 h-[2.5px] rounded-full mx-auto mt-12 sm:mt-16"
            style={{ backgroundColor: LOGO_GREEN }}
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SloganSection;

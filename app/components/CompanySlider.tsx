'use client';

import { motion } from 'framer-motion';
import type React from 'react';

export default function CompanySlider() {
  return (
    <div className="w-full space-y-4 overflow-hidden text-white">
      {/* Top row - slides to the right */}
      <LogoSlider direction="right" className="">
        <LogoItem>Nexora</LogoItem>
        <LogoItem icon>Aurionix</LogoItem>
        <LogoItem>Zylotech</LogoItem>
        <LogoItem>Qorvex</LogoItem>
        <LogoItem icon>Lumivra</LogoItem>
        <LogoItem>Truvora</LogoItem>
        <LogoItem>QuantumEdge</LogoItem>
        <LogoItem>Vireon</LogoItem>
        <LogoItem>AxoimCore</LogoItem>
      </LogoSlider>

      {/* Bottom row - slides to the left */}
      <LogoSlider direction="left" className="">
        <LogoItem>Novaforge</LogoItem>
        <LogoItem>ZenithPoint</LogoItem>
        <LogoItem icon>Prymax Solutions</LogoItem>
        <LogoItem>Stellaris Group</LogoItem>
        <LogoItem>VortexWorks</LogoItem>
        <LogoItem icon>Orbiton Dynamic</LogoItem>
        <LogoItem>Infinitrix Labs</LogoItem>
        <LogoItem>Ecliptix</LogoItem>
      </LogoSlider>
    </div>
  );
}

interface LogoSliderProps {
  children: React.ReactNode;
  direction: 'left' | 'right';
  className?: string;
  single?: boolean;
}

export function LogoSlider({
  children,
  direction,
  className = '',
  single = false,
}: LogoSliderProps) {
  return (
    <div className={`relative whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        <div className="inline-block">{children}</div>
        {!single && <div className="inline-block">{children}</div>}
      </motion.div>
    </div>
  );
}

interface LogoItemProps {
  children: React.ReactNode;
  icon?: boolean;
}

export function LogoItem({ children, icon = false }: LogoItemProps) {
  return (
    <div className="relative mx-4 inline-block rounded-[1.25rem] bg-gradient-to-b from-[#1F2224] to-[#16181A] p-[1px]">
      <div className="relative flex items-center rounded-[1.2rem] bg-gradient-to-b from-[#16181A] to-[#0F1011] to-70% px-8 py-4 text-[1.2rem] font-semibold text-[#F0F2FF]">
        {icon && (
          <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-white">
            <div className="h-3 w-3 bg-black"></div>
          </div>
        )}
        <span>{children}</span>
      </div>
    </div>
  );
}

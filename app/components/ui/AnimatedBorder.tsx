'use client';

import type React from 'react';
import { useRef, useEffect, useState, useMemo } from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  color?: string;
  thickness?: number;
  speed?: number;
  lineLength?: number;
}

export default function AnimatedBorder({
  children,
  color = '#3b82f6',
  thickness = 2,
  speed = 2,
  lineLength = 20,
}: AnimatedBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const { offsetWidth, offsetHeight } = containerRef.current!;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const perimeter = useMemo(() => 2 * (dimensions.width + dimensions.height), [dimensions]);

  const dashArray = useMemo(
    () => `${lineLength} ${perimeter - lineLength}`,
    [perimeter, lineLength]
  );

  const dynamicStyles = useMemo(
    () =>
      ({
        '--perimeter': perimeter,
        '--duration': `${speed * 10}s`,
      }) as React.CSSProperties,
    [perimeter, speed]
  );

  return (
    <div ref={containerRef} style={{ position: 'relative', ...dynamicStyles }}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
          }}
          width="100%"
          height="100%"
        >
          <rect
            x={thickness / 2}
            y={thickness / 2}
            width={dimensions.width - thickness}
            height={dimensions.height - thickness}
            rx="12"
            ry="12"
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray={dashArray}
            className="animate-border-flow"
          />
        </svg>
      )}
      <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
    </div>
  );
}

// 222222222222222222222222222222222
// 222222222222222222222222222222222
// 222222222222222222222222222222222
// 'use client';

// import type React from 'react';
// import { useRef, useEffect, useState, useMemo } from 'react';

// interface AnimatedBorderProps {
//   children: React.ReactNode;
//   color?: string; // ignored if gradient is default
//   thickness?: number;
//   speed?: number;
//   lineLength?: number;
// }

// export default function AnimatedBorder({
//   children,
//   color,
//   thickness = 2,
//   speed = 2,
//   lineLength = 20,
// }: AnimatedBorderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateDimensions = () => {
//       const { offsetWidth, offsetHeight } = containerRef.current!;
//       setDimensions({ width: offsetWidth, height: offsetHeight });
//     };

//     updateDimensions();

//     const resizeObserver = new ResizeObserver(updateDimensions);
//     resizeObserver.observe(containerRef.current);

//     return () => resizeObserver.disconnect();
//   }, []);

//   const perimeter = useMemo(() => 2 * (dimensions.width + dimensions.height), [dimensions]);

//   const dashArray = useMemo(
//     () => `${lineLength} ${perimeter - lineLength}`,
//     [perimeter, lineLength]
//   );

//   const dynamicStyles = useMemo(
//     () =>
//       ({
//         '--perimeter': perimeter,
//         '--duration': `${speed * 10}s`,
//       }) as React.CSSProperties,
//     [perimeter, speed]
//   );

//   return (
//     <div ref={containerRef} style={{ position: 'relative', ...dynamicStyles }}>
//       {dimensions.width > 0 && dimensions.height > 0 && (
//         <svg
//           style={{
//             position: 'absolute',
//             inset: 0,
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//           width="100%"
//           height="100%"
//         >
//           <defs>
//             <linearGradient id="default-border-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#2E2928" />
//               <stop offset="47%" stopColor="#BB97F2" />
//               <stop offset="78%" stopColor="#FF7C91" />
//             </linearGradient>
//           </defs>
//           <rect
//             x={thickness / 2}
//             y={thickness / 2}
//             width={dimensions.width - thickness}
//             height={dimensions.height - thickness}
//             rx="12"
//             ry="12"
//             fill="none"
//             stroke={color || 'url(#default-border-gradient)'}
//             strokeWidth={thickness}
//             strokeDasharray={dashArray}
//             className="animate-border-flow"
//           />
//         </svg>
//       )}
//       <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
//     </div>
//   );
// }

// 222222222END22222222222
// 222222222END22222222222
// 222222222END22222222222

// 333333333333333333333333333
// 333333333333333333333333333
// 333333333333333333333333333

// 'use client';

// import type React from 'react';
// import { useRef, useEffect, useState } from 'react';

// interface AnimatedBorderProps {
//   children: React.ReactNode;
//   thickness?: number;
//   speed?: number;
//   lineLength?: number;
// }

// export default function AnimatedBorder({
//   children,
//   thickness = 2,
//   speed = 2,
//   lineLength = 20,
// }: AnimatedBorderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateDimensions = () => {
//       const { offsetWidth, offsetHeight } = containerRef.current!;
//       setDimensions({ width: offsetWidth, height: offsetHeight });
//     };

//     updateDimensions();

//     const resizeObserver = new ResizeObserver(updateDimensions);
//     resizeObserver.observe(containerRef.current);

//     return () => resizeObserver.disconnect();
//   }, []);

//   const perimeter = 2 * (dimensions.width + dimensions.height);
//   const dashArray = `${lineLength} ${perimeter - lineLength}`;

//   return (
//     <div ref={containerRef} style={{ position: 'relative' }}>
//       {dimensions.width > 0 && dimensions.height > 0 && (
//         <svg
//           style={{
//             position: 'absolute',
//             inset: 0,
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//           width="100%"
//           height="100%"
//         >
//           <defs>
//             <linearGradient id="moving-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#2E2928" />
//               <stop offset="47%" stopColor="#BB97F2" />
//               <stop offset="78%" stopColor="#FF7C91" />
//               <stop offset="100%" stopColor="#FF7C91" />
//             </linearGradient>
//           </defs>
//           <rect
//             x={thickness / 2}
//             y={thickness / 2}
//             width={dimensions.width - thickness}
//             height={dimensions.height - thickness}
//             rx="12"
//             ry="12"
//             fill="none"
//             stroke="url(#moving-gradient)"
//             strokeWidth={thickness}
//             strokeDasharray={dashArray}
//             strokeDashoffset={perimeter}
//           >
//             <animate
//               attributeName="stroke-dashoffset"
//               from={perimeter}
//               to="0"
//               dur={`${speed * 10}s`}
//               repeatCount="indefinite"
//             />
//           </rect>
//         </svg>
//       )}
//       <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
//     </div>
//   );
// }

// 333333333333333333333333333
// 333333333333333333333333333
// 333333333333333333333333333

// 'use client';

// import type React from 'react';
// import { useRef, useEffect, useState } from 'react';

// interface AnimatedBorderProps {
//   children: React.ReactNode;
//   thickness?: number;
//   speed?: number;
// }

// export default function AnimatedBorder({
//   children,
//   thickness = 2,
//   speed = 2,
// }: AnimatedBorderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateDimensions = () => {
//       const { offsetWidth, offsetHeight } = containerRef.current!;
//       setDimensions({ width: offsetWidth, height: offsetHeight });
//     };

//     updateDimensions();

//     const resizeObserver = new ResizeObserver(updateDimensions);
//     resizeObserver.observe(containerRef.current);

//     return () => resizeObserver.disconnect();
//   }, []);

//   return (
//     <div ref={containerRef} style={{ position: 'relative' }}>
//       {dimensions.width > 0 && dimensions.height > 0 && (
//         <svg
//           style={{
//             position: 'absolute',
//             inset: 0,
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//           width="100%"
//           height="100%"
//         >
//           <defs>
//             <linearGradient id="movingGradient" x1="0%" y1="0%" x2="300%" y2="0%">
//               <stop offset="0%" stopColor="#2E2928" />
//               <stop offset="47%" stopColor="#BB97F2" />
//               <stop offset="78%" stopColor="#FF7C91" />
//               <stop offset="100%" stopColor="#2E2928" />
//               <animateTransform
//                 attributeName="gradientTransform"
//                 type="translate"
//                 from="-1 0"
//                 to="1 0"
//                 dur={`${speed * 5}s`}
//                 repeatCount="indefinite"
//               />
//             </linearGradient>
//           </defs>
//           <rect
//             x={thickness / 2}
//             y={thickness / 2}
//             width={dimensions.width - thickness}
//             height={dimensions.height - thickness}
//             rx="12"
//             ry="12"
//             fill="none"
//             stroke="url(#movingGradient)"
//             strokeWidth={thickness}
//           />
//         </svg>
//       )}
//       <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
//     </div>
//   );
// }

// 'use client';

// import React, { useRef, useEffect, useState } from 'react';

// interface AnimatedBorderProps {
//   children: React.ReactNode;
//   thickness?: number;
//   speed?: number;
//   lineLength?: number;
// }

// export default function AnimatedBorder({
//   children,
//   thickness = 2,
//   speed = 2,
//   lineLength = 20,
// }: AnimatedBorderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateDimensions = () => {
//       const { offsetWidth, offsetHeight } = containerRef.current!;
//       setDimensions({ width: offsetWidth, height: offsetHeight });
//     };

//     updateDimensions();
//     const resizeObserver = new ResizeObserver(updateDimensions);
//     resizeObserver.observe(containerRef.current);

//     return () => resizeObserver.disconnect();
//   }, []);

//   const perimeter = 2 * (dimensions.width + dimensions.height);
//   const dashArray = `${lineLength} ${perimeter - lineLength}`;

//   return (
//     <div ref={containerRef} style={{ position: 'relative' }}>
//       {dimensions.width > 0 && dimensions.height > 0 && (
//         <svg
//           style={{
//             position: 'absolute',
//             inset: 0,
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//           width="100%"
//           height="100%"
//         >
//           <defs>
//             <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#2E2928" />
//               <stop offset="47%" stopColor="#BB97F2" />
//               <stop offset="78%" stopColor="#FF7C91" />
//               <animate
//                 attributeName="x1"
//                 values="0%;100%;0%"
//                 dur={`${speed * 5}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="x2"
//                 values="100%;200%;100%"
//                 dur={`${speed * 5}s`}
//                 repeatCount="indefinite"
//               />
//             </linearGradient>
//           </defs>
//           <rect
//             x={thickness / 2}
//             y={thickness / 2}
//             width={dimensions.width - thickness}
//             height={dimensions.height - thickness}
//             rx="12"
//             ry="12"
//             fill="none"
//             stroke="url(#borderGradient)"
//             strokeWidth={thickness}
//             strokeDasharray={dashArray}
//             strokeDashoffset={perimeter}
//           >
//             <animate
//               attributeName="stroke-dashoffset"
//               from={perimeter}
//               to="0"
//               dur={`${speed * 2}s`}
//               repeatCount="indefinite"
//             />
//           </rect>
//         </svg>
//       )}
//       <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
//     </div>
//   );
// }

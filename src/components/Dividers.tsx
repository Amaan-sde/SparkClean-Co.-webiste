/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

// Bridges a section of color A to color B with an elegant curve
interface DividerProps {
  fillColor: string; // Tailwind class like "fill-white" or custom hex
  backgroundColor?: string; // The section background behind the divider
  className?: string;
}

export const SmoothCurvedDivider: React.FC<DividerProps> = ({
  fillColor,
  backgroundColor = "bg-transparent",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${backgroundColor} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[100px]"
      >
        <path
          d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
          className={fillColor}
        ></path>
      </svg>
    </div>
  );
};

// Wave Divider
export const WaveDivider: React.FC<DividerProps> = ({
  fillColor,
  backgroundColor = "bg-transparent",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${backgroundColor} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] md:h-[80px]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.72,26.11,146.25,43.83,212.91,66.6,321.39,56.44Z"
          className={fillColor}
        ></path>
      </svg>
    </div>
  );
};

// Angled Section Divider
export const AngledDivider: React.FC<DividerProps & { reverse?: boolean }> = ({
  fillColor,
  backgroundColor = "bg-transparent",
  className = "",
  reverse = false,
}) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${backgroundColor} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] md:h-[70px]"
      >
        <path
          d={reverse ? "M1200,0 L0,120 L1200,120 Z" : "M0,0 L1200,120 L0,120 Z"}
          className={fillColor}
        ></path>
      </svg>
    </div>
  );
};

// Curved Top Divider (useful for transitioning into CTA and dark sections)
export const CurvedTopDivider: React.FC<DividerProps> = ({
  fillColor,
  backgroundColor = "bg-transparent",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${backgroundColor} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] md:h-[80px]"
      >
        <path
          d="M0,120 C300,10 900,10 1200,120 L1200,0 L0,0 Z"
          className={fillColor}
        ></path>
      </svg>
    </div>
  );
};

// Gradient Fade Separator
export const GradientFadeDivider: React.FC<{ from: string; to: string; height?: string }> = ({
  from,
  to,
  height = "h-24",
}) => {
  return <div className={`w-full ${height} bg-gradient-to-b ${from} ${to}`} />;
};

// Floating background blur blob
export const BackgroundBlob: React.FC<{
  color: string;
  size?: string;
  position?: string;
  delay?: number;
}> = ({ color, size = "w-72 h-72", position = "top-0 left-0", delay = 0 }) => {
  return (
    <div
      className={`absolute ${size} ${position} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none -z-10`}
      style={{
        backgroundColor: color,
        animationDelay: `${delay}s`,
        animationDuration: "8s",
      }}
    />
  );
};

// Clean Dotted Grid Background Accent
export const DottedGrid: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`absolute pointer-events-none -z-10 opacity-30 ${className}`}
      style={{
        backgroundImage: "radial-gradient(#14b8a6 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
  );
};

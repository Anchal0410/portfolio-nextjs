// import React from "react";

// import { cn } from "@/lib/utils";
// import { bricolage_grotesque } from "@/utils/fonts";

// type RainbowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// export function RainbowButton({ children, ...props }: RainbowButtonProps) {
//   return (
//     <button
//       className={cn(
//         `h-10 max-sm:h-10 text-sm px-5 max-sm:px-5 py-1 max-sm:py-0 ${bricolage_grotesque} inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative group animate-rainbow cursor-pointer border-0 bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]`,

//         // before styles
//         "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

//         // light mode colors
//         "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

//         // dark mode colors
//         " dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
//       )}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

import React from "react";
import { cn } from "@/lib/utils";
import { bricolage_grotesque } from "@/utils/fonts";

type RainbowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function RainbowButton({ children, ...props }: RainbowButtonProps) {
  return (
    <button
      className={cn(
        `relative group inline-flex items-center justify-center h-10 max-sm:h-10 px-5 max-sm:px-5 py-1 max-sm:py-0 text-sm rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer border-0 bg-[length:200%] text-primary-foreground overflow-hidden ${bricolage_grotesque}`,

        // Light Mode: mirror-like rainbow gradient with shine
        `bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]
         [background-clip:padding-box,border-box,border-box]
         [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]`,

        // Dark Mode variant
        `dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]`,

        // Shine animation: light mode only
        "before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] before:translate-x-[-100%] before:animate-shine before:opacity-70 before:pointer-events-none before:transition-opacity dark:before:hidden",

        // Rainbow glow blur behind (already in your code)
        "after:absolute after:bottom-[-20%] after:left-1/2 after:z-0 after:h-1/5 after:w-3/5 after:-translate-x-1/2 after:animate-rainbow after:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] after:bg-[length:200%] after:[filter:blur(calc(0.8*1rem))]"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

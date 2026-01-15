import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';

type ButtonProps = {
  children: ReactNode
  className?: string,
  variant?: 'primary' | 'secondary' | 'ghost' | "none" | 'nav' | 'destructive' | 'outline' | 'link',
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  tooltip?: string,
  tooltipId?: string,
  active?: boolean
}

export const Button = ({ children, className, variant = 'primary', onClick, disabled, tooltip, tooltipId, active }: ButtonProps) => {
  const variants: Record<string, string> = {
    "primary": "bg-[var(--primary)] text-white ",
    "secondary": `bg-(--secondary) text-gray-600 w-full rounded-sm ${active ? '!bg-[var(--drop)]' : ''}`,
    "ghost": "bg-slate-200/10 border-4 backdrop-blur-sm text-[var(--foreground)] active:brightness-95!",
    "nav": `bg-transparent text-[var(--foreground)] hover:!text-[var(--primary)] hover:bg-[#77777725] !rounded-full active:bg-[#77777750] !p-1`,
    "destructive": "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    "outline": "border-1 border-[var(--primary)]! text-[var(--foreground)]  active:brightness-95! text-gray-700! bg-gray-200! !hover:brightness-105 hover:scale-102 active:scale-100 transition-all duration-200",
    "link": "text-gray-400 underline-offset-4 hover:underline hover:decoration-[var(--primary)] hover:text-[var(--primary)]"
  }


  return (
    <button disabled={disabled} className={clsx('hover:brightness-120 active:brightness-75 disabled:brightness-70 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 rounded-xl', 'flex items-center gap-2  px-4 py-2 border-1 border-transparent', active && '!brightness-75', variants[variant], className)} onClick={onClick} data-tooltip-id={tooltipId || 'tooltip'} data-tooltip-content={tooltip}>
      {children}

      {/* tooltip  */}
      <Tooltip
        id='tooltip'
        place='bottom'
        delayShow={1000}
      />
    </button>
  )
}
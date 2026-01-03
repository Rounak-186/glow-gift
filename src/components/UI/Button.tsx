import React from 'react';
import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';
import { Outlet } from 'react-router-dom';

type ButtonProps = {
  className?: string,
  variant?: 'primary' | 'secondary' | 'ghost' | "none" | 'nav' | 'destructive' | 'outline' | 'link',
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  tooltip?: string,
  tooltipId?: string,
  active?: boolean
}

export const Button = ({ className, variant = 'primary', onClick, disabled, tooltip, tooltipId, active }: ButtonProps) => {
  const variants: Record<string, string> = {
    "primary": "bg-[var(--primary)] text-white",
    "secondary": `bg-transparent text-[var(--foreground)] hover:!bg-[var(--drop)] w-full !rounded-sm ${active ? '!bg-[var(--drop)]' : ''}`,
    "ghost": "bg-transparent border-4 border-[var(--secondary)] text-[var(--foreground)] ",
    "nav": `bg-transparent text-[var(--foreground)] hover:bg-[#77777740] !rounded-full active:bg-[#77777750] !p-1`,
    "destructive": "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    "outline": "border-1 border-gray-700 text-[var(--foreground)] bg-[var(--primary-transparent)] hover:bg-[#5820c054]",
    "link": "text-primary underline-offset-4 hover:underline"
  }


  return (
    <button disabled={disabled} className={clsx('hover:brightness-120 active:brightness-75 disabled:brightness-70 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 rounded-xl', 'flex items-center gap-2  px-4 py-2 border-1 border-transparent', active && '!brightness-75', variants[variant], className)} onClick={onClick} data-tooltip-id={tooltipId || 'tooltip'} data-tooltip-content={tooltip}>
      <Outlet/>

      {/* tooltip  */}
      <Tooltip
        id='tooltip'
        place='bottom'
        delayShow={1000}
      />
    </button>
  )
}
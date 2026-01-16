
import clsx from 'clsx';
import React, { useState } from 'react'

type ToggleNavProps = {
    options: Record<string, any>[],
    activeTab?: string,
    onTabChange?: (tab: string) => void,
}

export const ToggleNav = ({ options, activeTab, onTabChange }: ToggleNavProps) => {
    const [tab, setTab] = useState<string>(activeTab || '');
    return (
        <div className="flex border border-[var(--accent)] rounded-full p-1 w-fit">
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => {
                        setTab(option.value);
                        onTabChange && onTabChange(option.value);
                    }}
                    className={clsx(
                        "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer text-[var(--primary)]",
                        tab === option.value
                            && "bg-[var(--accent)] !text-white"
                            
                    )}
                >
                    {option.label} ({option.count})
                </button>
            ))}
        </div>

    )
}

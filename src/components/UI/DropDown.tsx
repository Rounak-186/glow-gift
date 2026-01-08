import clsx from "clsx"
import type React from "react"
import { useEffect, useRef, useState } from "react"

type DropdownProps = {
    children?: React.ReactNode,
    open: boolean,
    onClose?: () => void,
    className?: string
}

export const Dropdown = ({ children, open, onClose, className }: DropdownProps) => {

    const ref = useRef<HTMLDivElement>(null);
    // handle dropdown open state
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(false);
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (open) {
            setIsOpen(true)
        }
        else {
            setIsClose(true)
            timeout = setTimeout(() => {
                setIsOpen(false)
                setIsClose(false)
            }, 250)
        }

        return () => clearTimeout(timeout)
    }, [open])

    useEffect(() => {
        const handleMouseClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            setTimeout(() => {
                if (isOpen && ref.current && !ref.current.contains(target as Node) && onClose) {
                    onClose();
                }
            }, 250);

        }
        document.addEventListener('mousedown', handleMouseClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleMouseClickOutside);
        }
    }, [isOpen])

    if (!isOpen) {
        return null
    }

    return (
        <div ref={ref} className={clsx("absolute top-15 right-2 text-cyan-400 border w-60  border-[var(--secondary)] rounded-lg z-50 dropdown-open-anim overflow-hidden", className, isClose && "dropdown-close-anim")}>
            {children}
        </div>
    )
}
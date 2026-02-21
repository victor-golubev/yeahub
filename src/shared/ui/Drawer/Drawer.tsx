// shared/ui/Drawer/Drawer.tsx
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

interface DrawerProps {
	children: ReactNode
	isOpen: boolean
	className?: string
	onClose: () => void
}

export const Drawer = ({
	children,
	isOpen,
	className,
	onClose
}: DrawerProps) => {
	const drawerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!isOpen) return
		const handleClickOutside = (event: MouseEvent) => {
			if (
				drawerRef.current &&
				!drawerRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}
		const timeoutId = setTimeout(
			() => document.addEventListener('click', handleClickOutside),
			0
		)
		return () => {
			clearTimeout(timeoutId)
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div
			ref={drawerRef}
			className={className}
			onClick={e => e.stopPropagation()}
		>
			{children}
		</div>
	)
}

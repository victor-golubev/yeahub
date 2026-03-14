import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

interface DrawerProps {
	children: ReactNode
	isOpen: boolean
	className?: string
	onClose: () => void
	lockScroll?: boolean
}

export const Drawer = ({
	children,
	isOpen,
	className,
	onClose,
	lockScroll = true
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

	useEffect(() => {
		if (!isOpen) return
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isOpen, onClose])

	useEffect(() => {
		if (!lockScroll) return
		document.body.style.overflow = isOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen, lockScroll])

	if (!isOpen) return null

	return (
		<div
			ref={drawerRef}
			role="dialog"
			aria-modal="true"
			className={className}
			onClick={e => e.stopPropagation()}
		>
			{children}
		</div>
	)
}

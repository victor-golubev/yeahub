import { cn } from '@/shared/lib'
import styles from './Overlay.module.css'

interface OverlayProps {
	isVisible: boolean
	onClick?: () => void
	className?: string
}

export const Overlay = ({ isVisible, onClick, className }: OverlayProps) => {
	if (!isVisible) return null

	return (
		<div
			className={cn(styles.overlay, className)}
			onClick={onClick}
			aria-hidden="true"
		/>
	)
}

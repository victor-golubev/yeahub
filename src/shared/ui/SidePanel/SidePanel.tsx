import { CloseIcon } from '@/shared/assets/icons/CloseIcon'
import { cn } from '@/shared/lib'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import type { ReactNode } from 'react'
import styles from './SidePanel.module.css'

interface SidePanelProps {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
	className?: string
}

export const SidePanel = ({
	children,
	isOpen,
	onClose,
	className
}: SidePanelProps) => {
	return (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			className={cn(styles.panel, isOpen && styles.open, className)}
		>
			<div className={styles.header}>
				<button
					onClick={onClose}
					aria-label="Закрыть панель"
				>
					<CloseIcon className={styles.close} />
				</button>
			</div>
			<div className={styles.inner}>{children}</div>
		</Drawer>
	)
}

import accordion from '@/shared/assets/icons/accordion.svg'
import { cn } from '@/shared/lib'
import type { ReactNode } from 'react'
import { useState } from 'react'
import styles from './Accordion.module.css'

interface AccordionProps {
	title: ReactNode
	children: ReactNode
	className?: string
	defaultOpen?: boolean
	id?: string
	maxHeight?: string
}

export const Accordion = ({
	title,
	children,
	className,
	defaultOpen = false,
	id,
	maxHeight = '500px'
}: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(defaultOpen)

	return (
		<div className={cn(styles.accordion, className)}>
			<button
				type="button"
				className={styles.trigger}
				onClick={() => setIsOpen(prev => !prev)}
				aria-expanded={isOpen}
				aria-controls={id ? `accordion-content-${id}` : undefined}
			>
				<span className={styles.title}>{title}</span>
				<img
					src={accordion}
					alt=""
					className={cn(styles.icon, isOpen && styles.iconOpen)}
				/>
			</button>

			<div
				id={id ? `accordion-content-${id}` : undefined}
				className={cn(styles.content, isOpen && styles.contentOpen)}
				style={isOpen ? { maxHeight } : undefined}
				aria-hidden={!isOpen}
			>
				{children}
			</div>
		</div>
	)
}

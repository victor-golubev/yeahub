import type { ReactNode } from 'react'
import styles from './Chip.module.css'

interface ChipProps {
	children: ReactNode
	selected?: boolean
	icon?: string
	onClick?: () => void
	variant?: 'default' | 'outlined'
}

export const Chip = ({
	children,
	selected = false,
	icon,
	onClick,
	variant = 'outlined'
}: ChipProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`
        ${styles.chip} 
        ${styles[`chip--${variant}`]}
        ${selected ? styles['chip--selected'] : ''}
      `}
			aria-pressed={selected}
		>
			{icon && (
				<img
					src={icon}
					alt=""
					className={styles.icon}
				/>
			)}
			<span>{children}</span>
		</button>
	)
}

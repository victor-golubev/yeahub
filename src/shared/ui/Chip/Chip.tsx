import type { ReactNode } from 'react'
import styles from './Chip.module.css'

interface ChipProps {
	children: ReactNode
	selected?: boolean
	icon?: string
	onClick?: () => void
	variant?: 'default' | 'outlined'
	disabled?: boolean
}

export const Chip = ({
	children,
	selected = false,
	icon,
	onClick,
	variant = 'outlined',
	disabled = false
}: ChipProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			aria-pressed={selected}
			className={`
        ${styles.chip}
        ${styles[`chip--${variant}`]}
        ${selected ? styles['chip--selected'] : ''}
        ${disabled ? styles['chip--disabled'] : ''}
      `}
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

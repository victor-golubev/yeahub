import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary' | 'ghost'
	size: 'sm' | 'md' | 'lg'
	fullWidth?: boolean
}

export const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className = '',
	disabled,
	type = 'button',
	...props
}: ButtonProps) => {
	const classes = [
		styles.button,
		styles[`button--${variant}`],
		styles[`button--${size}`],
		fullWidth && styles['button--full'],
		className
	]
		.filter(Boolean)
		.join(' ')

	return (
		<button
			type={type}
			className={classes}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
}

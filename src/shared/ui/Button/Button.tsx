import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
	fullWidth?: boolean
	as?: ElementType
	to?: string
}

export const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className = '',
	as: Component = 'button',
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
		<Component
			type={Component === 'button' ? type : undefined}
			className={classes}
			{...props}
		>
			{children}
		</Component>
	)
}

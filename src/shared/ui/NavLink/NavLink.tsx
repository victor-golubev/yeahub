import { cn } from '@/shared/lib'
import type { ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import styles from './NavLink.module.css'

interface NavLinkProps {
	to: string
	children: ReactNode
	className?: string
	onClick?: () => void
}

export const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
	return (
		<RouterNavLink
			to={to}
			onClick={onClick}
			className={({ isActive }) =>
				cn(styles.link, isActive && styles.active, className)
			}
		>
			{children}
		</RouterNavLink>
	)
}

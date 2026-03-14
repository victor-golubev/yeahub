import { cn } from '@/shared/lib'
import type React from 'react'
import styles from './Surface.module.css'

interface SurfaceProps {
	as?: 'div' | 'main' | 'aside' | 'section'
	children: React.ReactNode
	className?: string
}

export const Surface = ({
	as: Component = 'div',
	children,
	className
}: SurfaceProps) => {
	return (
		<Component className={cn(styles.surface, className)}>{children}</Component>
	)
}

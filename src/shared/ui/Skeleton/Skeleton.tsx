import type { CSSProperties } from 'react'
import styles from './Skeleton.module.css'

interface SkeletonProps {
	width?: string | number
	height?: string | number
	borderRadius?: string | number
	className?: string
}

export const Skeleton = ({
	width = '100%',
	height = '20px',
	borderRadius = '12px',
	className = ''
}: SkeletonProps) => {
	const style: CSSProperties = {
		width,
		height,
		borderRadius
	}

	return (
		<div
			className={`${styles.skeleton} ${className}`}
			style={style}
		/>
	)
}

import type { ReactNode } from 'react'
import styles from './FilterSection.module.css'

interface FilterSectionProps {
	title: string
	children: ReactNode
}

export const FilterSection = ({ title, children }: FilterSectionProps) => {
	return (
		<section className={styles.section}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.content}>{children}</div>
		</section>
	)
}

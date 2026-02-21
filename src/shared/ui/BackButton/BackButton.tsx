import { ChevronLeftIcon } from '@/shared/assets/icons/ChevronLeftIcon'
import { Link } from 'react-router-dom'
import styles from './BackButton.module.css'

interface BackButtonProps {
	to: string
	className?: string
	children?: React.ReactNode
}

export const BackButton = ({
	to,
	className,
	children = 'Назад'
}: BackButtonProps) => (
	<Link
		to={to}
		className={`${styles.link} ${className}`}
	>
		<ChevronLeftIcon className={styles.icon} />
		{children}
	</Link>
)

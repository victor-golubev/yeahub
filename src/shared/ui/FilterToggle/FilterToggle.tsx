import styles from './FilterToggle.module.css'

interface FilterToggleProps {
	expanded: boolean
	onToggle: () => void
}

export const FilterToggle = ({ expanded, onToggle }: FilterToggleProps) => {
	return (
		<button
			onClick={onToggle}
			type="button"
			className={styles.button}
		>
			{expanded ? 'Скрыть' : 'Посмотреть все'}
		</button>
	)
}

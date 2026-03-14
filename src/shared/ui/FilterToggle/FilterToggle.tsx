import styles from './FilterToggle.module.css'

interface FilterToggleProps {
	expanded: boolean
	onToggle: () => void
	labelExpanded?: string
	labelCollapsed?: string
}

export const FilterToggle = ({
	expanded,
	onToggle,
	labelExpanded = 'Скрыть',
	labelCollapsed = 'Посмотреть все'
}: FilterToggleProps) => {
	return (
		<button
			type="button"
			onClick={onToggle}
			aria-expanded={expanded}
			className={styles.button}
		>
			{expanded ? labelExpanded : labelCollapsed}
		</button>
	)
}

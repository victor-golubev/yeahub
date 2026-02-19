import noResultsIcon from '@/shared/assets/images/no-results.png'
import { Button } from '@/shared/ui/Button'
import styles from './NoResults.module.css'

interface NoResultsProps {
	onResetFilters: () => void
}

export const NoResults = ({ onResetFilters }: NoResultsProps) => {
	return (
		<div className={styles.noResults}>
			<img
				className={styles.image}
				src={noResultsIcon}
				alt="Нет результатов"
			/>
			<p>К сожалению, по запросу ничего не найдено.</p>
			<p>Попробуйте изменить запрос или воспользуйтесь нашими категориями.</p>
			<Button
				as={'button'}
				to="/register"
				variant="secondary"
				className={styles.reset}
				onClick={onResetFilters}
			>
				Сбросить фильтр
			</Button>
		</div>
	)
}

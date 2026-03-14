import { QuestionCard, useGetQuestionsQuery } from '@/entities/question'
import { useQuestionFilters } from '@/features/question-filters'
import { FiltersIcon } from '@/shared/assets/icons/FiltersIcon'
import { NoResults } from '@/shared/ui'
import { Pagination } from '@/shared/ui'
import { PageError } from '@/shared/ui'
import { QuestionsListWidgetSkeleton } from '@/widgets/questions-list/ui/QuestionsListWidgetSkeleton'
import styles from './QuestionsListWidget.module.css'
import { PAGINATION_LIMIT } from '@/shared/constants'

export const QuestionsListWidget = () => {
	const {
		filters,
		apiParams,
		updateFilters,
		resetFilters,
		toggleMobileFilters
	} = useQuestionFilters()

	const { data, isLoading, isError, refetch } = useGetQuestionsQuery(apiParams)

	if (isLoading) return <QuestionsListWidgetSkeleton />

	if (isError)
		return (
			<PageError
				message="Ошибка загрузки"
				onRetry={refetch}
			/>
		)

	if (data?.data.length === 0)
		return <NoResults onResetFilters={resetFilters} />

	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<h1 className={styles.title}>Вопросы</h1>
				<button
					className={styles.filterButton}
					onClick={toggleMobileFilters}
				>
					<FiltersIcon />
				</button>
			</header>

			<div className={styles.list}>
				{data?.data.map(question => (
					<QuestionCard
						key={question.id}
						question={question}
					/>
				))}
			</div>

			<div className={styles.footer}>
				<Pagination
					currentPage={filters.page}
					totalPages={Math.ceil((data?.total ?? 0) / PAGINATION_LIMIT)}
					onPageChange={page => updateFilters({ page })}
				/>
			</div>
		</div>
	)
}

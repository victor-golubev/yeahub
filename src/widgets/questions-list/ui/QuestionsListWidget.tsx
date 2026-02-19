// widgets/questions-list/ui/QuestionsList.tsx
import { QuestionCard, useGetQuestionsQuery } from '@/entities/question'
import { useQuestionFilters } from '@/features/question-filters'
import { NoResults } from '@/shared/ui/NoResults/NoResults'
import { Pagination } from '@/shared/ui/Pagination'
import { PageError } from '@/shared/ui/errors/PageError'
import { QuestionsListWidgetSkeleton } from '@/widgets/questions-list/ui/QuestionsListWidgetSkeleton'
import styles from './QuestionsListWidget.module.css'

export const QuestionsListWidget = () => {
	const { filters, apiParams, updateFilters, resetFilters } =
		useQuestionFilters()

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
					totalPages={Math.ceil((data?.total ?? 0) / 10)}
					onPageChange={page => updateFilters({ page })}
				/>
			</div>
		</div>
	)
}

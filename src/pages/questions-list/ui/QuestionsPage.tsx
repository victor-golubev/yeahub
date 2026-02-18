import { useGetQuestionsQuery } from '@/entities/question'
import { useGetSkillsQuery } from '@/entities/skill'
import { useGetSpecializationsQuery } from '@/entities/specialization'
import { useQuestionFilters } from '@/features/question-filters'
import { QuestionsPageSkeleton } from '@/pages/questions-list/ui/QuestionsPageSkeleton'
import { Container } from '@/shared/ui/Container/Container'
import { Pagination } from '@/shared/ui/Pagination'
import { Surface } from '@/shared/ui/Surface/Surface'
import { PageError } from '@/shared/ui/errors/PageError'
import { QuestionFilters } from '@/widgets/question-filters/QuestionFilters'
import { QuestionFiltersSkeleton } from '@/widgets/question-filters/QuestionFiltersSkeleton'
import { QuestionsList } from '@/widgets/questions-list/QuestionsList'
import { useCallback } from 'react'
import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
	const { filters, apiParams, updateFilters, resetFilters } =
		useQuestionFilters()

	const {
		data: questionsData,
		isLoading: isQuestionsLoading,
		isFetching,
		isError,
		error,
		refetch
	} = useGetQuestionsQuery(apiParams)

	const { data: specializationsData, isLoading: isSpecializationsLoading } =
		useGetSpecializationsQuery()

	const handlePageChange = useCallback(
		(page: number) => {
			updateFilters({ page })
		},
		[updateFilters]
	)

	const { data: skills, isLoading: isSkillsLoading } = useGetSkillsQuery(
		{ specializations: filters.specialization },
		{ skip: !filters.specialization }
	)

	const isFiltersLoading =
		isSpecializationsLoading ||
		(Boolean(filters.specialization) && isSkillsLoading)

	const questions = questionsData?.data ?? []
	const totalPages = Math.ceil(
		(questionsData?.total ?? 0) / (apiParams.limit ?? 10)
	)

	if (isQuestionsLoading) {
		return <QuestionsPageSkeleton />
	}

	if (isError) {
		return (
			<Container>
				<div className={styles.layout}>
					<div className={styles.main}>
						<Surface>
							<PageError
								message="Не удалось загрузить список вопросов"
								onRetry={refetch}
							/>
						</Surface>
					</div>
					<div className={styles.aside}>
						<Surface>
							{isFiltersLoading ? (
								<QuestionFiltersSkeleton />
							) : (
								<QuestionFilters
									filters={filters}
									onUpdate={updateFilters}
								/>
							)}
						</Surface>
					</div>
				</div>
			</Container>
		)
	}

	return (
		<Container>
			<div className={styles.layout}>
				<div className={styles.main}>
					<Surface>
						<QuestionsList
							questions={questions}
							onResetFilters={resetFilters}
						/>

						{totalPages > 1 && (
							<Pagination
								currentPage={filters.page}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						)}
					</Surface>
				</div>

				<div className={styles.aside}>
					<Surface>
						{isFiltersLoading ? (
							<QuestionFiltersSkeleton />
						) : (
							<QuestionFilters
								filters={filters}
								onUpdate={updateFilters}
							/>
						)}
					</Surface>
				</div>
			</div>
		</Container>
	)
}

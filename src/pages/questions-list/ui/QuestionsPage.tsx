// pages/questions-list/ui/QuestionsPage.tsx

import { useGetQuestionsQuery } from '@/entities/question'
import { useQuestionFilters } from '@/features/question-filters'
import { Container } from '@/shared/ui/Container/Container'
import { Surface } from '@/shared/ui/Surface/Surface'
import { QuestionFilters } from '@/widgets/question-filters/QuestionFilters'
import { QuestionsList } from '@/widgets/questions-list/QuestionsList'
import styles from './QuestionsPage.module.css'
/**
 * Страница списка вопросов
 *
 * Основная функциональность:
 * - Отображение списка вопросов
 * - Фильтрация и поиск
 * - Пагинация
 */
export const QuestionsPage = () => {
	// Получаем фильтры и методы работы с ними
	const { filters, apiParams, updateFilters } = useQuestionFilters()

	// Запрос данных с текущими фильтрами
	const { data, isLoading, isFetching, isError, error } =
		useGetQuestionsQuery(apiParams)

	// Обработка пагинации
	const handlePageChange = (page: number) => {
		updateFilters({ page })
	}

	// Состояния загрузки
	if (isLoading) {
		return (
			<div className="questions-page">
				<div className="questions-page__loading">
					{/* TODO: Добавить скелетон-загрузчик */}
					<p>Загрузка вопросов...</p>
				</div>
			</div>
		)
	}

	// Обработка ошибок
	if (isError) {
		return (
			<div className="questions-page">
				<div className="questions-page__error">
					<h2>Ошибка загрузки</h2>
					<p>Не удалось загрузить список вопросов. Попробуйте позже.</p>
				</div>
			</div>
		)
	}

	const questions = data?.data ?? []
	const totalPages = Math.ceil((data?.total ?? 0) / (apiParams.limit ?? 10))

	return (
		<Container>
			<div className={styles.layout}>
				<Surface as="main">
					<QuestionsList
						questions={questions}
						total={totalPages}
						currentPage={filters.page}
						onPageChange={handlePageChange}
					/>
				</Surface>

				<Surface as="aside">
					<QuestionFilters
						filters={filters}
						onUpdate={updateFilters}
					/>
				</Surface>
			</div>
		</Container>
	)
}

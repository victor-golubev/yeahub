// pages/questions-list/ui/QuestionsPage.tsx

import { QuestionCard, useGetQuestionsQuery } from '@/entities/question'
import {
	ComplexityFilter,
	RateFilter,
	SearchInput,
	SkillsFilter,
	SpecializationFilter,
	useQuestionFilters
} from '@/features/question-filters'
import { Pagination } from '@/shared/ui/Pagination'

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
	const hasResults = questions.length > 0

	return (
		<div className="questions-page">
			{/* Фильтры */}
			<aside className="questions-page__filters">
				<SearchInput
					value={filters.search}
					onSearch={search => updateFilters({ search })}
				/>

				<SpecializationFilter
					value={filters.specialization}
					onChange={specialization => updateFilters({ specialization })}
				/>

				<ComplexityFilter
					value={filters.complexity}
					onChange={complexity => updateFilters({ complexity })}
				/>

				<RateFilter
					value={filters.rate}
					onChange={rate => updateFilters({ rate })}
				/>

				<SkillsFilter
					value={filters.skills}
					onChange={skills => updateFilters({ skills })}
					specializationId={filters.specialization}
				/>
			</aside>

			{/* Основной контент */}
			<main className="questions-page__content">
				{/* Заголовок с результатами */}
				<header className="questions-page__header">
					<h1>Вопросы</h1>
					<p className="questions-page__count">Найдено: {data?.total ?? 0}</p>
				</header>

				{/* Индикатор фоновой загрузки (при пагинации/фильтрации) */}
				{isFetching && !isLoading && (
					<div className="questions-page__fetching">Обновление...</div>
				)}

				{/* Список вопросов */}
				{hasResults ? (
					<>
						<div className="questions-page__list">
							{questions.map(question => (
								<QuestionCard
									key={question.id}
									question={question}
								/>
							))}
						</div>

						{/* Пагинация */}
						{totalPages > 1 && (
							<Pagination
								currentPage={filters.page}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						)}
					</>
				) : (
					<div className="questions-page__empty">
						<p>По вашему запросу ничего не найдено</p>
						<button
							onClick={() =>
								updateFilters({
									search: undefined,
									specialization: undefined,
									complexity: undefined,
									rate: undefined,
									skills: undefined,
									keywords: undefined,
									page: 1
								})
							}
						>
							Сбросить фильтры
						</button>
					</div>
				)}
			</main>
		</div>
	)
}

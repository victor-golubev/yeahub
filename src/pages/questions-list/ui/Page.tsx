import { QuestionCard, useGetQuestionsQuery } from '@/entities/question'
import { useSearchParams } from 'react-router-dom'

export const QuestionsPage = () => {
	const [searchParams] = useSearchParams()

	const page = Number(searchParams.get('page') || 1)
	const search = searchParams.get('search') || ''

	const { data, isLoading, isError } = useGetQuestionsQuery({
		page,
		search,
		limit: 10
	})

	const questions = data?.data || []

	if (isLoading) return <div>Загрузка списка...</div>
	if (isError) return <div>Ошибка при загрузке данных.</div>

	return (
		<section>
			<h2>Найдено вопросов: {questions.length || 0}</h2>

			<div>
				{questions.map((question: any) => (
					<QuestionCard
						key={question.id}
						id={question.id}
						title={question.title}
						complexity={question.complexity}
					/>
				))}

				{data?.items?.length === 0 && <p>Вопросов не найдено</p>}
			</div>
		</section>
	)
}

import { useGetQuestionByIdQuery } from '@/entities/question'
import { Container } from '@/shared/ui/Container/Container'
import { QuestionDetailsWidget } from '@/widgets/question-details/ui/QuestionDetailsWidget'
import { Navigate, useParams } from 'react-router-dom'

export const QuestionDetailsPage = () => {
	const { id } = useParams<{ id: string }>()

	if (!id || Number.isNaN(+id)) {
		return (
			<Navigate
				to="/questions"
				replace
			/>
		)
	}

	const { data, isLoading, isError } = useGetQuestionByIdQuery(id)

	if (isLoading) return <p>Загрузка...</p>
	if (isError || !data) return <p>Вопрос не найден</p>

	return (
		<Container>
			<QuestionDetailsWidget question={data} />
		</Container>
	)
}

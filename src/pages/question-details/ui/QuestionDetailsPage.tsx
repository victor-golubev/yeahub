import { useGetQuestionByIdQuery } from '@/entities/question'
import { QuestionDetailsPageSkeleton } from '@/pages/question-details/ui/QuestionsDetailsPageSkeleton'
import { Container } from '@/shared/ui/Container/Container'
import { PageError } from '@/shared/ui/errors/PageError'
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

	const { data, isLoading, isError, refetch } = useGetQuestionByIdQuery(id)

	if (isLoading) return <QuestionDetailsPageSkeleton />

	if (isError || !data) {
		return (
			<Container>
				<PageError
					message="Вопрос не найден"
					onRetry={() => refetch()}
				/>
			</Container>
		)
	}

	return (
		<Container>
			<QuestionDetailsWidget question={data} />
		</Container>
	)
}

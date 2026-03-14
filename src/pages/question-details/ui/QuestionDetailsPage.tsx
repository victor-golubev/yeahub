import { useGetQuestionByIdQuery } from '@/entities/question'
import { QuestionDetailsPageSkeleton } from '@/pages/question-details/ui/QuestionDetailsPageSkeleton'
import { Container } from '@/shared/ui'
import { PageError } from '@/shared/ui'
import { QuestionDetailsWidget } from '@/widgets/question-details/ui/QuestionDetailsWidget'
import { skipToken } from '@reduxjs/toolkit/query'
import { Navigate, useParams } from 'react-router-dom'

export const QuestionDetailsPage = () => {
	const { id } = useParams<{ id: string }>()

	const numericId = id && !Number.isNaN(+id) ? id : undefined

	const { data, isLoading, isError, refetch } = useGetQuestionByIdQuery(
		numericId ?? skipToken
	)

	if (!numericId) {
		return (
			<Navigate
				to="/questions"
				replace
			/>
		)
	}

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

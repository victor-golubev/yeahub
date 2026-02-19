import { questionApi } from '@/entities/question'
import { useNavigate } from 'react-router-dom'

type Params = {
	prevId?: number | null
	nextId?: number | null
}

export const useQuestionNavigation = ({ prevId, nextId }: Params) => {
	const navigate = useNavigate()
	const prefetchQuestion = questionApi.usePrefetch('getQuestionById')

	const goPrev = () => prevId && navigate(`/questions/${prevId}`)
	const goNext = () => nextId && navigate(`/questions/${nextId}`)

	const onHoverNext = () => nextId && prefetchQuestion(String(nextId))
	const onHoverPrev = () => prevId && prefetchQuestion(String(prevId))

	return {
		canGoPrev: Boolean(prevId),
		canGoNext: Boolean(nextId),
		goPrev,
		goNext,
		onHoverNext,
		onHoverPrev
	}
}

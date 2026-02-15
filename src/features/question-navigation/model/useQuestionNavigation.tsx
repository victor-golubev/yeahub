import { useNavigate } from 'react-router-dom'

type Params = {
	prevId?: number | null
	nextId?: number | null
}

export const useQuestionNavigation = ({ prevId, nextId }: Params) => {
	const navigate = useNavigate()

	const goPrev = () => {
		if (prevId) navigate(`/questions/${prevId}`)
	}

	const goNext = () => {
		if (nextId) navigate(`/questions/${nextId}`)
	}

	return {
		canGoPrev: Boolean(prevId),
		canGoNext: Boolean(nextId),
		goPrev,
		goNext
	}
}

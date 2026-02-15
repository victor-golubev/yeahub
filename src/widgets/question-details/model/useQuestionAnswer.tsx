import { useGetQuestionByIdQuery } from '@/entities/question'

export const useQuestionDetails = (id: string) => {
	return useGetQuestionByIdQuery(id)
}

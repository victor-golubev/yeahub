import { baseApi } from '@/shared/api/baseApi'
import type {
	GetQuestionsParams,
	GetQuestionsResponse,
	Question
} from '../model/types'

export const questionApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getQuestions: build.query<GetQuestionsResponse, GetQuestionsParams>({
			query: params => ({
				url: '/questions/public-questions',
				params
			}),
			providesTags: result =>
				result
					? [
							...result.data.map(({ id }) => ({
								type: 'Questions' as const,
								id
							})),
							{ type: 'Questions', id: 'LIST' }
						]
					: [{ type: 'Questions', id: 'LIST' }],

			transformResponse: (
				response: GetQuestionsResponse
			): GetQuestionsResponse => {
				return {
					data: response.data || [],
					total: response.total || 0,
					page: response.page || 1,
					limit: response.limit || 10
				}
			}
		}),

		getQuestionById: build.query<Question, string>({
			query: id => `/questions/public-questions/${id}`,
			providesTags: (result, error, id) => [{ type: 'Questions', id }]
		})
	})
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi

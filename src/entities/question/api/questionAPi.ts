import { baseApi } from '../../../shared/api/baseApi'

export const questionApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getQuestions: build.query<any, any>({
			query: params => ({
				url: '/questions',
				params
			}),
			providesTags: ['Questions']
		}),
		getQuestionById: build.query<any, string>({
			query: id => `/questions/${id}`
		})
	})
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi

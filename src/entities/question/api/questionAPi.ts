// entities/question/api/questionApi.ts

import { baseApi } from '@/shared/api/baseApi'
import type {
  GetQuestionsParams,
  GetQuestionsResponse,
  Question,
} from '../model/types'

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    /**
     * Получить список вопросов с пагинацией и фильтрацией
     */
    getQuestions: build.query<GetQuestionsResponse, GetQuestionsParams>({
      query: (params) => ({
        url: '/questions/public-questions',
        params,
      }),
      // Правильная инвалидация кэша
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: 'Questions' as const,
                id,
              })),
              { type: 'Questions', id: 'LIST' },
            ]
          : [{ type: 'Questions', id: 'LIST' }],
      
      // Трансформация ответа (если API возвращает не в том формате)
      transformResponse: (response: any): GetQuestionsResponse => {
        return {
          data: response.data || [],
          total: response.total || 0,
          page: response.page || 1,
          limit: response.limit || 10,
        }
      },
    }),

    /**
     * Получить вопрос по ID
     */
    getQuestionById: build.query<Question, string>({
      query: (id) => `/questions/public-questions/${id}`,
      providesTags: (result, error, id) => [{ type: 'Questions', id }],
    }),
  }),
})

export const { 
  useGetQuestionsQuery, 
  useGetQuestionByIdQuery,
  // Для prefetching
  usePrefetch,
} = questionApi

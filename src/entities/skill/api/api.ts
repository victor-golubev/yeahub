import type { Skill } from '@/entities/skill/model/types'
import { baseApi } from '@/shared/api/baseApi'

export const skillsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getSkills: builder.query<
			Skill[],
			{ limit?: number; specializations?: string }
		>({
			query: ({ limit, specializations }) => ({
				url: '/skills',
				params: { limit, specializations }
			}),
			transformResponse: (response: { data: Skill[] }) => response.data,
			providesTags: ['Skills']
		})
	}),
	overrideExisting: false
})

export const { useGetSkillsQuery } = skillsApi

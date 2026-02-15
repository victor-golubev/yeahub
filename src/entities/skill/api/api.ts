import { baseApi } from '@/shared/api/baseApi'

export type Skill = {
	id: number
	title: string
	description?: string
	imageSrc?: string
}

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

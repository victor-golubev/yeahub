import { baseApi } from '@/shared/api/baseApi'

export type Skill = {
	id: number
	title: string
	description?: string
	imageSrc?: string
}

export const skillsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getSkills: builder.query<Skill[], void>({
			query: () => '/skills',
			transformResponse: (response: { data: Skill[] }) => response.data,
			providesTags: ['Skills']
		})
	}),
	overrideExisting: false
})

export const { useGetSkillsQuery } = skillsApi

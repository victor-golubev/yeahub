import type { Specialization } from '@/entities/question'
import { baseApi } from '@/shared/api/baseApi'

interface getSpecializationResponse {
	data: Specialization[]
}

export const specializationApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getSpecializations: build.query<getSpecializationResponse, void>({
			query: () => '/specializations',
			providesTags: ['Specializations']
		})
	})
})

export const { useGetSpecializationsQuery } = specializationApi

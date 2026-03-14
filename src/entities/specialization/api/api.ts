import { baseApi } from '@/shared/api/baseApi'
import type { Specialization } from '../model/types'

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

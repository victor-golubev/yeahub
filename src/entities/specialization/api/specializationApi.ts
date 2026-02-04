import { baseApi } from '@/shared/api/baseApi'

export const specializationApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getSpecializations: build.query<any, any>({
			query: params => ({
				url: '/specializations',
				params
			}),
			providesTags: ['Specializations']
		})
	})
})

export const { useGetSpecializationsQuery } = specializationApi

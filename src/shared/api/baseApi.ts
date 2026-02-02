import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
	tagTypes: ['Questions', 'Specializations', 'Skills'],
	endpoints: () => ({})
})

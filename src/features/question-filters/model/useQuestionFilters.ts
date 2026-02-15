import type { GetQuestionsParams } from '@/entities/question'
import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const DEFAULT_FILTERS = {
	page: 1,
	specialization: '11'
}

export interface QuestionFilters {
	page: number
	search?: string
	specialization: string
	complexity?: number[]
	rate?: number[]
	skills?: number[]
	keywords?: string
}

export const useQuestionFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const filters = useMemo<QuestionFilters>(() => {
		return {
			page: Number(searchParams.get('page')) || 1,
			search: searchParams.get('search') || undefined,
			specialization:
				searchParams.get('specialization') ?? DEFAULT_FILTERS.specialization,
			complexity:
				searchParams
					.get('complexity')
					?.split(',')
					.map(Number)
					.filter(n => !isNaN(n)) || undefined,
			rate:
				searchParams
					.get('rate')
					?.split(',')
					.map(Number)
					.filter(n => !isNaN(n)) || undefined,
			skills:
				searchParams
					.get('skills')
					?.split(',')
					.map(Number)
					.filter(n => !isNaN(n)) || undefined,
			keywords: searchParams.get('keywords') || undefined
		}
	}, [searchParams])

	const apiParams = useMemo<GetQuestionsParams>(() => {
		return {
			page: filters.page,
			limit: 10,
			title: filters.search,
			specialization: filters.specialization,
			complexity:
				filters.complexity?.filter(c => c >= 1 && c <= 10).join(',') ||
				undefined,
			rate: filters.rate?.filter(r => r >= 1 && r <= 5).join(',') || undefined,
			skills: filters.skills?.join(','),
			keywords: filters.keywords
		}
	}, [filters])

	const updateFilters = useCallback(
		(updates: Partial<QuestionFilters>) => {
			const newParams = new URLSearchParams(searchParams)

			if (Object.keys(updates).some(key => key !== 'page')) {
				newParams.set('page', '1')
			}

			Object.entries(updates).forEach(([key, value]) => {
				if (value === undefined || value === null || value === '') {
					newParams.delete(key)
				} else if (Array.isArray(value)) {
					if (value.length === 0) {
						newParams.delete(key)
					} else {
						newParams.set(key, value.join(','))
					}
				} else {
					newParams.set(key, String(value))
				}
			})

			setSearchParams(newParams)
		},
		[searchParams, setSearchParams]
	)

	const resetFilters = useCallback(() => {
		setSearchParams({})
	}, [setSearchParams])

	useEffect(() => {
		const hasPage = searchParams.has('page')
		const hasSpec = searchParams.has('specialization')

		if (!hasPage || !hasSpec) {
			updateFilters({
				page: hasPage
					? Number(searchParams.get('page')) || 1
					: DEFAULT_FILTERS.page,
				specialization: hasSpec
					? searchParams.get('specialization') || undefined
					: DEFAULT_FILTERS.specialization
			})
		}
	}, [])

	return {
		filters,
		apiParams,
		updateFilters,
		resetFilters
	}
}

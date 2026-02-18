import type { GetQuestionsParams } from '@/entities/question'
import { DEFAULT_SPECIALIZATION_ID } from '@/shared/constants/filters'
import { PAGINATION_LIMIT } from '@/shared/constants/pagination'
import { RATE_VALUES } from '@/shared/constants/rate'
import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

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
				searchParams.get('specialization') ?? DEFAULT_SPECIALIZATION_ID,
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
			limit: PAGINATION_LIMIT,
			title: filters.search,
			specialization: filters.specialization,
			complexity:
				filters.complexity?.filter(c => c >= 1 && c <= 10).join(',') ||
				undefined,
			rate:
				filters.rate?.filter(r => RATE_VALUES.some(rv => rv === r)).join(',') ||
				undefined,
			skills: filters.skills?.join(','),
			keywords: filters.keywords
		}
	}, [filters])

	const updateFilters = useCallback(
		(updates: Partial<QuestionFilters>) => {
			setSearchParams(prev => {
				const newParams = new URLSearchParams(prev)

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

				return newParams
			})
		},
		[setSearchParams]
	)

	const resetFilters = useCallback(() => {
		setSearchParams({})
	}, [setSearchParams])

	useEffect(() => {
		try {
			const hasPage = searchParams.has('page')
			const hasSpec = searchParams.has('specialization')

			if (!hasPage || !hasSpec) {
				updateFilters({
					page: hasPage ? Number(searchParams.get('page')) : 1,
					specialization: hasSpec
						? searchParams.get('specialization') || undefined
						: DEFAULT_SPECIALIZATION_ID
				})
			}
		} catch (error) {
			console.error('Ошибка получения фильтров:', error)
		}
	}, [])

	return {
		filters,
		apiParams,
		updateFilters,
		resetFilters
	}
}

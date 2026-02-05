// features/question-filters/model/useQuestionFilters.ts

import { useSearchParams } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import type { GetQuestionsParams } from '@/entities/question'

/**
 * Интерфейс для работы с фильтрами вопросов через URL query params
 */
export interface QuestionFilters {
  page: number
  search?: string
  specializationId?: string
  complexity?: number[]
  rate?: number[]
  skillIds?: number[]
  keywords?: string
}

/**
 * Хук для управления фильтрами вопросов
 * 
 * Инкапсулирует всю логику работы с searchParams:
 * - Чтение текущих фильтров из URL
 * - Обновление фильтров с сохранением в URL
 * - Преобразование в формат для API
 * 
 * @example
 * const { filters, apiParams, updateFilters, resetFilters } = useQuestionFilters()
 */
export const useQuestionFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // Парсинг текущих фильтров из URL
  const filters = useMemo<QuestionFilters>(() => {
    return {
      page: Number(searchParams.get('page')) || 1,
      search: searchParams.get('search') || undefined,
      specializationId: searchParams.get('specialization') || undefined,
      complexity: searchParams.get('complexity')
        ?.split(',')
        .map(Number)
        .filter((n) => !isNaN(n)) || undefined,
      rate: searchParams.get('rate')
        ?.split(',')
        .map(Number)
        .filter((n) => !isNaN(n)) || undefined,
      skillIds: searchParams.get('skills')
        ?.split(',')
        .map(Number)
        .filter((n) => !isNaN(n)) || undefined,
      keywords: searchParams.get('keywords') || undefined,
    }
  }, [searchParams])

  // Преобразование фильтров в формат для API
  const apiParams = useMemo<GetQuestionsParams>(() => {
    return {
      page: filters.page,
      limit: 10,
      title: filters.search,
      specialization: filters.specializationId,
      complexity: filters.complexity?.join(','),
      rate: filters.rate?.join(','),
      skills: filters.skillIds?.join(','),
      keywords: filters.keywords,
    }
  }, [filters])

  /**
   * Обновить фильтры
   * При изменении любого фильтра сбрасываем страницу на 1
   */
  const updateFilters = useCallback(
    (updates: Partial<QuestionFilters>) => {
      const newParams = new URLSearchParams(searchParams)

      // Сброс страницы при изменении фильтров (кроме page)
      if (Object.keys(updates).some((key) => key !== 'page')) {
        newParams.set('page', '1')
      }

      // Применяем обновления
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

  /**
   * Сбросить все фильтры
   */
  const resetFilters = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  return {
    filters,
    apiParams,
    updateFilters,
    resetFilters,
  }
}

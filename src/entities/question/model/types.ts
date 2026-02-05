// entities/question/model/types.ts

/**
 * Уровни сложности вопроса
 */
export const COMPLEXITY = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
} as const

export type ComplexityLevel = (typeof COMPLEXITY)[keyof typeof COMPLEXITY]

/**
 * Специализация
 */
export interface Specialization {
  id: number
  title: string
  description: string
}

/**
 * Навык
 */
export interface Skill {
  id: number
  title: string
  imageSrc?: string
}

/**
 * Вопрос (полная модель)
 */
export interface Question {
  id: number
  title: string
  description?: string
  complexity: ComplexityLevel
  rate: number
  shortAnswer: string
  longAnswer: string
  keywords: string[]
  questionSpecializations: Specialization[]
  questionSkills: Skill[]
  createdAt: string
  updatedAt: string
}

/**
 * Вопрос для карточки (упрощенная модель для списка)
 */
export interface QuestionPreview {
  id: number
  title: string
  complexity: ComplexityLevel
  rate: number
  questionSpecializations: Specialization[]
}

/**
 * Параметры запроса списка вопросов
 */
export interface GetQuestionsParams {
  page?: number
  limit?: number
  title?: string // поиск по названию
  specialization?: string
  complexity?: string // "1,2,3"
  rate?: string // "1,2,3,4,5"
  skills?: string // "1,2,3"
  keywords?: string
}

/**
 * Ответ API со списком вопросов
 */
export interface GetQuestionsResponse {
  data: Question[]
  total: number
  page: number
  limit: number
}

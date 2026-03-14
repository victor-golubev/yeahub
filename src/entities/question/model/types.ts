import type { Skill } from '@/entities/skill'
import type { Specialization } from '@/entities/specialization'
import type { ComplexityLevel, Rate } from '@/shared/constants'

export type { ComplexityLevel, Rate } from '@/shared/constants'

export interface Question {
	id: number
	title: string
	description?: string
	complexity: ComplexityLevel
	rate: Rate
	shortAnswer: string
	longAnswer: string
	keywords: string[]
	questionSpecializations: Specialization[]
	questionSkills: Skill[]
	createdAt: string
	updatedAt: string
}

export interface QuestionPreview {
	id: number
	title: string
	complexity: ComplexityLevel
	rate: Rate
	questionSpecializations: Specialization[]
	shortAnswer: string
}

export interface GetQuestionsParams {
	page?: number
	limit?: number
	title?: string
	specialization?: string
	complexity?: string
	rate?: string
	skills?: string
	keywords?: string
}

export interface GetQuestionsResponse {
	data: Question[]
	total: number
	page: number
	limit: number
}

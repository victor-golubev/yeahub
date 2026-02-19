import type { Skill } from '@/entities/skill'
import type { Specialization } from '@/entities/specialization'

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type Rate = 1 | 2 | 3 | 4 | 5

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

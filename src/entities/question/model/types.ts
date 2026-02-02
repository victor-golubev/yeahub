export interface Specialization {
	id: number
	title: string
	description: string
}

export interface Question {
	id: number
	title: string
	complexity: number
	questionSpecializations: Specialization[]
	shortAnswer: string
	longAnswer: string
}

export interface Skill {
	id: number
	title: string
	imageSrc?: string
}

export interface GetSkillsParams {
	limit?: number
	specializations?: string
}

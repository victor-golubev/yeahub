export const ROUTES = {
	QUESTIONS: '/questions',
	QUESTION_ITEM: '/questions/:id',
	QUESTION_DETAILS: (id: string | number) => `/questions/${id}`,
	TRAINER: '/trainer',
	MATERIALS: '/materials',
	LOGIN: '/login',
	REGISTER: '/register',
	QUESTIONS_BY_SKILL: (skillId: number) =>
		`/questions?page=1&skills=${skillId}`,
	QUESTIONS_BY_KEYWORD: (keyword: string) =>
		`/questions?page=1&keywords=${keyword}`
} as const

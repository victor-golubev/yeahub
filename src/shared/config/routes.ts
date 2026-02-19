export const ROUTES = {
	QUESTIONS: '/questions',
	QUESTION_ITEM: '/questions/:id',
	QUESTION_DETAILS: (id: string | number) => `/questions/${id}`,
	TRAINER: '/trainer',
	MATERIALS: '/materials',
	LOGIN: '/login',
	REGISTER: '/register'
} as const

// entities/question/index.ts

/**
 * Public API для сущности Question
 * 
 * Этот файл - единственная точка входа в слой entities/question.
 * Все импорты из этого модуля должны идти только через этот файл.
 */

// API
export { 
  questionApi, 
  useGetQuestionsQuery, 
  useGetQuestionByIdQuery,
} from './api/questionApi'

// Types
export type {
  Question,
  QuestionPreview,
  GetQuestionsParams,
  GetQuestionsResponse,
  Specialization,
  Skill,
  ComplexityLevel,
} from './model/types'

export { COMPLEXITY } from './model/types'

// UI
export { QuestionCard } from './ui/QuestionCard'

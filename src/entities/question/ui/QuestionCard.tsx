// entities/question/ui/QuestionCard.tsx

import { Link } from 'react-router-dom'
import type { QuestionPreview } from '../model/types'

interface QuestionCardProps {
  question: QuestionPreview
}

/**
 * Карточка вопроса для списка
 * 
 * @example
 * <QuestionCard question={question} />
 */
export const QuestionCard = ({ question }: QuestionCardProps) => {
  const { id, title, complexity, questionSpecializations } = question

  return (
    <article className="question-card">
      <h3 className="question-card__title">{title}</h3>
      
      <div className="question-card__meta">
        <span className="question-card__complexity">
          Сложность: {complexity}
        </span>
        
        {questionSpecializations.length > 0 && (
          <div className="question-card__specializations">
            {questionSpecializations.map((spec) => (
              <span key={spec.id} className="question-card__spec-tag">
                {spec.title}
              </span>
            ))}
          </div>
        )}
      </div>

      <Link 
        to={`/questions/${id}`} 
        className="question-card__link"
      >
        Подробнее →
      </Link>
    </article>
  )
}

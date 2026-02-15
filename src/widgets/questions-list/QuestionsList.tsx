import type { Question } from '@/entities/question'
import { NoResults } from '@/features/question-filters/ui/NoResults'
import { QuestionCard } from '@/shared/ui/entities/question/QuestionCard'
import styles from './QuestionsList.module.css'

// widgets/questions-list/ui/QuestionsList.tsx
interface QuestionsListProps {
	questions: Question[]
	onResetFilters: () => void
}

export const QuestionsList = ({
	questions,
	onResetFilters
}: QuestionsListProps) => {
	return (
		<div className={styles.layout}>
			<div className={styles.header}>
				<h1 className={styles.title}>Вопросы</h1>
			</div>
			<div className={styles.list}>
				{questions.map(question => (
					<QuestionCard
						key={question.id}
						question={question}
					/>
				))}
			</div>

			{questions.length === 0 && <NoResults onResetFilters={onResetFilters} />}
		</div>
	)
}

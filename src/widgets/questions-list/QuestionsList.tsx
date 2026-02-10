import { QuestionCard, type Question } from '@/entities/question'
import { Pagination } from '@/shared/ui/Pagination'
import styles from './QuestionsList.module.css'

// widgets/questions-list/ui/QuestionsList.tsx
interface QuestionsListProps {
	questions: Question[]
	total: number
	currentPage: number
	onPageChange: (page: number) => void
}

export const QuestionsList = ({
	questions,
	total,
	currentPage,
	onPageChange
}: QuestionsListProps) => {
	const totalPages = Math.ceil(total / 10)

	return (
		<div className={styles.list}>
			<div className={styles.header}>
				<h1 className={styles.title}>Вопросы</h1>
			</div>

			{questions.length > 0 ? (
				<>
					{questions.map(question => (
						<QuestionCard
							key={question.id}
							question={question}
						/>
					))}

					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={onPageChange}
					/>
				</>
			) : (
				<div className="questions-page__empty">
					<p>По вашему запросу ничего не найдено</p>
				</div>
			)}
		</div>
	)
}

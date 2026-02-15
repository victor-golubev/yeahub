import type { Question } from '@/entities/question'
import { QuestionNavigation } from '@/features/question-navigation/ui/QuestionNavigation'
import { Surface } from '@/shared/ui/Surface/Surface'
import { QuestionAnswers } from './QuestionAnswers'
import styles from './QuestionDetailsWidget.module.css'
import { QuestionMeta } from './QuestionMeta'

type Props = {
	question: Question
}

export const QuestionDetailsWidget = ({ question }: Props) => {
	return (
		<div className={styles.layout}>
			<div className={styles.main}>
				<Surface>
					<h1 className={styles.title}>{question.title}</h1>
					{question.description && <p>{question.description}</p>}
				</Surface>
				<Surface>
					<QuestionNavigation
						prevId={question.id - 1}
						nextId={question.id + 1}
					/>
				</Surface>

				<QuestionAnswers
					shortAnswer={question.shortAnswer}
					longAnswer={question.longAnswer}
				/>
			</div>

			<QuestionMeta
				complexity={question.complexity}
				rate={question.rate}
				skills={question.questionSkills}
				keywords={question.keywords}
			/>
		</div>
	)
}

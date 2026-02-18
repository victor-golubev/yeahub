import type { Question } from '@/entities/question'
import { QuestionNavigation } from '@/features/question-navigation/ui/QuestionNavigation'
import { Surface } from '@/shared/ui/Surface/Surface'
import { Link } from 'react-router-dom'
import { QuestionAnswers } from './QuestionAnswers'
import styles from './QuestionDetailsWidget.module.css'
import { QuestionMeta } from './QuestionMeta'

type Props = {
	question: Question
}

export const QuestionDetailsWidget = ({ question }: Props) => {
	return (
		<div className={styles.layout}>
			<div className={styles.breadcrumbs}>
				<Link
					to="/"
					className={styles.link}
				>
					<svg
						className={styles.icon}
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.31768 12.6832C7.37575 12.7412 7.42181 12.8102 7.45324 12.886C7.48466 12.9619 7.50084 13.0432 7.50084 13.1253C7.50084 13.2075 7.48466 13.2888 7.45324 13.3647C7.42181 13.4405 7.37575 13.5095 7.31768 13.5675C7.25961 13.6256 7.19067 13.6717 7.1148 13.7031C7.03893 13.7345 6.95761 13.7507 6.87549 13.7507C6.79337 13.7507 6.71205 13.7345 6.63618 13.7031C6.56031 13.6717 6.49137 13.6256 6.4333 13.5675L0.183304 7.31754C0.125194 7.25949 0.0790947 7.19056 0.047642 7.11469C0.0161893 7.03881 0 6.95748 0 6.87535C0 6.79321 0.0161893 6.71188 0.047642 6.63601C0.0790947 6.56014 0.125194 6.49121 0.183304 6.43316L6.4333 0.18316C6.55058 0.0658846 6.70964 -3.26935e-09 6.87549 0C7.04134 3.26935e-09 7.2004 0.0658846 7.31768 0.18316C7.43495 0.300435 7.50084 0.459495 7.50084 0.625347C7.50084 0.7912 7.43495 0.95026 7.31768 1.06753L1.50909 6.87535L7.31768 12.6832Z"
							fill="currentColor"
						/>
					</svg>
					Назад
				</Link>
			</div>
			<div className={styles.content}>
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
		</div>
	)
}

import type { QuestionPreview } from '@/entities/question/model/types'
import { ROUTES } from '@/shared/config'
import { sanitizeHtml } from '@/shared/lib'
import { Accordion } from '@/shared/ui'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './QuestionCard.module.css'

interface QuestionCardProps {
	question: QuestionPreview
}

export const QuestionCard = memo(({ question }: QuestionCardProps) => {
	const { id, title, complexity, rate } = question

	return (
		<article className={styles.card}>
			<Accordion
				title={<p className={styles.title}>{title}</p>}
				id={String(id)}
			>
				<div className={styles.info}>
					<div className={styles.meta}>
						<p className={styles.metaItem}>
							Рейтинг: <span className={styles.digit}>{rate}</span>
						</p>
						<p className={styles.metaItem}>
							Сложность: <span className={styles.digit}>{complexity}</span>
						</p>
					</div>
					<Link
						to={ROUTES.QUESTION_DETAILS(id)}
						className={styles.link}
					>
						Подробнее →
					</Link>
				</div>
				<div
					className={styles.text}
					dangerouslySetInnerHTML={{
						__html: sanitizeHtml(question.shortAnswer)
					}}
				/>
			</Accordion>
		</article>
	)
})

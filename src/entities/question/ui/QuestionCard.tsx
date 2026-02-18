import type { QuestionPreview } from '@/entities/question/model/types'
import accordeon from '@/shared/assets/images/accordeon.svg'
import { cn } from '@/shared/lib/utils/cn'
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './QuestionCard.module.css'

interface QuestionCardProps {
	question: QuestionPreview
}

export const QuestionCard = memo(({ question }: QuestionCardProps) => {
	const { id, title, complexity, rate } = question
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(prev => !prev)

	return (
		<article className={styles.card}>
			<button
				type="button"
				className={styles.show}
				onClick={e => {
					e.stopPropagation()
					toggleOpen()
				}}
				aria-expanded={isOpen}
				aria-controls={`content-${id}`}
				aria-label={isOpen ? 'Скрыть ответ' : 'Показать ответ'}
			>
				<p className={styles.title}>{title}</p>
				<img
					src={accordeon}
					alt=""
					className={cn(styles.icon, isOpen && styles.iconOpen)}
				/>
			</button>

			<div className={cn(styles.body, isOpen && styles.bodyOpen)}>
				<div className={styles.info}>
					<div className={styles.meta}>
						<p className={styles.metaItem}>
							Рейтинг: <span className={styles.digit}>{rate}</span>
						</p>

						<p className={styles.meta__item}>
							Сложность: <span className={styles.digit}>{complexity}</span>
						</p>
					</div>

					<Link
						to={`/questions/${id}`}
						className={styles.link}
					>
						Подробнее →
					</Link>
				</div>

				<div className={styles.text}>{question.shortAnswer}</div>
			</div>
		</article>
	)
})

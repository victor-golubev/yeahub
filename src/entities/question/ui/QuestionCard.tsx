// entities/question/ui/QuestionCard.tsx

import accordeon from '@/shared/assets/images/accordeon.svg'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { QuestionPreview } from '../model/types'
import styles from './QuestionCard.module.css'
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
	const { id, title, complexity, rate } = question
	const [isOpen, setIsOpen] = useState(false)

	const bodyRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!bodyRef.current) return
		bodyRef.current.style.height = isOpen
			? `${bodyRef.current.scrollHeight}px`
			: '0px'
	}, [isOpen])

	return (
		<article
			className={styles.card}
			onClick={() => setIsOpen(prev => !prev)}
			aria-expanded={isOpen}
		>
			<div className={styles.header}>
				<p className={styles.title}>{title}</p>
				<button
					type="button"
					className={styles.show}
				>
					<img
						src={accordeon}
						alt="Детали вопроса"
						className={isOpen ? styles.iconOpen : styles.icon}
					/>
				</button>
			</div>

			<div
				ref={bodyRef}
				className={styles.body}
			>
				<div className={styles.info}>
					<div className={styles.meta}>
						<p className={styles.meta__item}>
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
}

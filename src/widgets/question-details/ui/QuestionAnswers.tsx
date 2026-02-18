import accordeon from '@/shared/assets/images/accordeon.svg'
import { cn } from '@/shared/lib/utils/cn'
import { sanitizeHtml } from '@/shared/lib/utils/sanitizeHtml'
import { Surface } from '@/shared/ui/Surface/Surface'
import { useState } from 'react'
import styles from './QuestionAnswers.module.css'

type Props = {
	shortAnswer: string
	longAnswer: string
}

export const QuestionAnswers = ({ shortAnswer, longAnswer }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<>
			<Surface>
				<div className={styles.answer}>
					<h2 className={styles.title}>Краткий ответ</h2>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: sanitizeHtml(shortAnswer) }}
					/>
				</div>
			</Surface>

			<Surface>
				<div className={styles.answer}>
					<h2 className={styles.title}>Подробный ответ</h2>

					<div className={styles.expandWrapper}>
						<div
							className={cn(styles.content, !isExpanded && styles.collapsed)}
							dangerouslySetInnerHTML={{ __html: sanitizeHtml(longAnswer) }}
						/>

						{!isExpanded && <div className={styles.overlay} />}
					</div>

					<button
						type="button"
						className={styles.expandBtn}
						onClick={() => setIsExpanded(!isExpanded)}
					>
						{isExpanded ? 'Свернуть' : 'Развернуть'}
						<img
							src={accordeon}
							alt=""
							className={cn(styles.arrow, isExpanded && styles.arrowActive)}
						/>
					</button>
				</div>
			</Surface>
		</>
	)
}

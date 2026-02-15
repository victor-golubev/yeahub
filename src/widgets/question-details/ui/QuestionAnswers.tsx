import { Surface } from '@/shared/ui/Surface/Surface'
import styles from './QuestionAnswers.module.css'

type Props = {
	shortAnswer: string
	longAnswer: string
}

export const QuestionAnswers = ({ shortAnswer, longAnswer }: Props) => {
	return (
		<>
			<Surface>
				<div className={styles.answer}>
					<h2 className={styles.title}>Краткий ответ</h2>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: shortAnswer }}
					/>
				</div>
			</Surface>

			<Surface>
				<div className={styles.answer}>
					<h2 className={styles.title}>Подробный ответ</h2>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: longAnswer }}
					/>
				</div>
			</Surface>
		</>
	)
}

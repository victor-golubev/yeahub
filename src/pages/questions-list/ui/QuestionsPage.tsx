// pages/questions-list/ui/QuestionsPage.tsx
import { Container } from '@/shared/ui/Container/Container'
import { Surface } from '@/shared/ui/Surface/Surface'
import { QuestionFiltersWidget } from '@/widgets/question-filters'
import { QuestionsListWidget } from '@/widgets/questions-list'
import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
	return (
		<Container>
			<div className={styles.layout}>
				<div className={styles.main}>
					<Surface>
						<QuestionsListWidget />
					</Surface>
				</div>

				<aside className={styles.aside}>
					<Surface>
						<QuestionFiltersWidget />
					</Surface>
				</aside>
			</div>
		</Container>
	)
}

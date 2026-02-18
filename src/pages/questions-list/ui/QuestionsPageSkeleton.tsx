import { Container } from '@/shared/ui/Container/Container'
import { Surface } from '@/shared/ui/Surface/Surface'
import { QuestionFiltersSkeleton } from '@/widgets/question-filters/QuestionFiltersSkeleton'
import { QuestionsListSkeleton } from '@/widgets/questions-list/QuestionsListSkeleton'
import styles from './QuestionsPageSkeleton.module.css'

export const QuestionsPageSkeleton = () => (
	<Container>
		<div className={styles.layout}>
			<div className={styles.main}>
				<Surface>
					<QuestionsListSkeleton />
				</Surface>
			</div>
			<div className={styles.aside}>
				<Surface>
					<QuestionFiltersSkeleton />
				</Surface>
			</div>
		</div>
	</Container>
)

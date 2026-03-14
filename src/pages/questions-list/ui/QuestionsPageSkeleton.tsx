import { Container } from '@/shared/ui'
import { Surface } from '@/shared/ui'
import { QuestionFiltersWidgetSkeleton } from '@/widgets/question-filters/ui/QuestionFiltersWidgetSkeleton'
import { QuestionsListWidgetSkeleton } from '@/widgets/questions-list/ui/QuestionsListWidgetSkeleton'
import styles from './QuestionsPageSkeleton.module.css'

export const QuestionsPageSkeleton = () => (
	<Container>
		<div className={styles.layout}>
			<div className={styles.main}>
				<Surface>
					<QuestionsListWidgetSkeleton />
				</Surface>
			</div>
			<div className={styles.aside}>
				<Surface>
					<QuestionFiltersWidgetSkeleton />
				</Surface>
			</div>
		</div>
	</Container>
)

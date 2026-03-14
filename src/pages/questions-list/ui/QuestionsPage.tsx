import { useQuestionFilters } from '@/features/question-filters'
import { Container } from '@/shared/ui'
import { SidePanel } from '@/shared/ui'
import { Surface } from '@/shared/ui'
import { QuestionFiltersWidget } from '@/widgets/question-filters'
import { QuestionsListWidget } from '@/widgets/questions-list'
import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
	const { isMobileOpen, closeMobileFilters } = useQuestionFilters()

	return (
		<Container>
			<div className={styles.layout}>
				<div className={styles.main}>
					<Surface>
						<QuestionsListWidget />
					</Surface>

					<SidePanel
						isOpen={isMobileOpen}
						onClose={closeMobileFilters}
					>
						<QuestionFiltersWidget />
					</SidePanel>
				</div>

				<div className={styles.aside}>
					<Surface>
						<QuestionFiltersWidget />
					</Surface>
				</div>
			</div>
		</Container>
	)
}

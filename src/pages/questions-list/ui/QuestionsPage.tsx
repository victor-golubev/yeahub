import { closeFilters } from '@/features/question-filters'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { Container, SidePanel, Surface } from '@/shared/ui'
import { QuestionFiltersWidget } from '@/widgets/question-filters'
import { QuestionsListWidget } from '@/widgets/questions-list'
import styles from './QuestionsPage.module.css'

export const QuestionsPage = () => {
	const dispatch = useAppDispatch()
	const isMobileOpen = useAppSelector(
		state => state.questionFilters.isMobileOpen
	)
	const closeMobileFilters = () => dispatch(closeFilters())

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

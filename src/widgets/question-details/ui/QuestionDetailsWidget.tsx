import type { Question } from '@/entities/question'
import { QuestionNavigation } from '@/features/question-navigation'
import { MetaIcon } from '@/shared/assets/icons/MetaIcon'
import { BackButton } from '@/shared/ui'
import { SidePanel } from '@/shared/ui'
import { Surface } from '@/shared/ui'
import { useState } from 'react'
import { QuestionAnswers } from './QuestionAnswers'
import styles from './QuestionDetailsWidget.module.css'
import { QuestionInfo } from './QuestionInfo'

type Props = {
	question: Question
}

export const QuestionDetailsWidget = ({ question }: Props) => {
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

	const toggleSidePanel = () => setIsSidePanelOpen(prev => !prev)
	const closeSidePanel = () => setIsSidePanelOpen(false)

	const infoContent = (
		<QuestionInfo
			complexity={question.complexity}
			rate={question.rate}
			skills={question.questionSkills}
			keywords={question.keywords}
		/>
	)

	return (
		<div className={styles.layout}>
			<div className={styles.breadcrumbs}>
				<BackButton to="/questions" />
			</div>

			<div className={styles.content}>
				<div className={styles.main}>
					<Surface>
						<div className={styles.header}>
							<h1 className={styles.title}>{question.title}</h1>
							<button
								className={styles.metaButton}
								onClick={toggleSidePanel}
								aria-label="Информация о вопросе"
							>
								<MetaIcon />
							</button>
						</div>
						<div className={styles.question}>
							{question.description && <p>{question.description}</p>}
						</div>
					</Surface>

					<Surface>
						<QuestionNavigation
							prevId={question.id - 1}
							nextId={question.id + 1}
						/>
					</Surface>

					<QuestionAnswers
						shortAnswer={question.shortAnswer}
						longAnswer={question.longAnswer}
					/>
				</div>

				<div className={styles.aside}>
					<Surface>{infoContent}</Surface>
				</div>
			</div>

			<SidePanel
				isOpen={isSidePanelOpen}
				onClose={closeSidePanel}
			>
				{infoContent}
			</SidePanel>
		</div>
	)
}

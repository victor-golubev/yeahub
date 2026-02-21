import { ChevronLeftIcon } from '@/shared/assets/icons/ChevronLeftIcon'
import { ChevronRightIcon } from '@/shared/assets/icons/ChevronRightIcon'
import { useQuestionNavigation } from '../lib/useQuestionNavigation'
import styles from './QuestionNavigation.module.css'

type Props = {
	prevId?: number | null
	nextId?: number | null
}

export const QuestionNavigation = ({ prevId, nextId }: Props) => {
	const { canGoPrev, canGoNext, goPrev, goNext, onHoverNext, onHoverPrev } =
		useQuestionNavigation({
			prevId,
			nextId
		})

	return (
		<div className={styles.navigation}>
			<button
				onClick={goPrev}
				onMouseEnter={onHoverPrev}
				disabled={!canGoPrev}
				className={styles.button}
			>
				<ChevronLeftIcon className={styles.icon} />
				Предыдущий
			</button>

			<button
				onClick={goNext}
				onMouseEnter={onHoverNext}
				disabled={!canGoNext}
				className={styles.button}
			>
				Следующий
				<svg
					className={styles.icon}
					width="8"
					height="16"
					viewBox="0 0 8 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ChevronRightIcon className={styles.icon} />
				</svg>
			</button>
		</div>
	)
}

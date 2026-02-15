// features/question-navigation/ui/QuestionNavigation.tsx
import { useQuestionNavigation } from '../model/useQuestionNavigation'
import styles from './QuestionNavigation.module.css'

type Props = {
	prevId?: number | null
	nextId?: number | null
}

export const QuestionNavigation = ({ prevId, nextId }: Props) => {
	const { canGoPrev, canGoNext, goPrev, goNext } = useQuestionNavigation({
		prevId,
		nextId
	})

	return (
		<div className={styles.navigation}>
			<button
				onClick={goPrev}
				disabled={!canGoPrev}
				className={styles.button}
			>
				<svg
					className={styles.icon}
					width="8"
					height="14"
					viewBox="0 0 8 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.31768 12.6832C7.37575 12.7412 7.42181 12.8102 7.45324 12.886C7.48466 12.9619 7.50084 13.0432 7.50084 13.1253C7.50084 13.2075 7.48466 13.2888 7.45324 13.3647C7.42181 13.4405 7.37575 13.5095 7.31768 13.5675C7.25961 13.6256 7.19067 13.6717 7.1148 13.7031C7.03893 13.7345 6.95761 13.7507 6.87549 13.7507C6.79337 13.7507 6.71205 13.7345 6.63618 13.7031C6.56031 13.6717 6.49137 13.6256 6.4333 13.5675L0.183304 7.31754C0.125194 7.25949 0.0790947 7.19056 0.047642 7.11469C0.0161893 7.03881 0 6.95748 0 6.87535C0 6.79321 0.0161893 6.71188 0.047642 6.63601C0.0790947 6.56014 0.125194 6.49121 0.183304 6.43316L6.4333 0.18316C6.55058 0.0658846 6.70964 -3.26935e-09 6.87549 0C7.04134 3.26935e-09 7.2004 0.0658846 7.31768 0.18316C7.43495 0.300435 7.50084 0.459495 7.50084 0.625347C7.50084 0.7912 7.43495 0.95026 7.31768 1.06753L1.50909 6.87535L7.31768 12.6832Z"
						fill="currentColor"
					/>
				</svg>{' '}
				Предыдущий
			</button>

			<button
				onClick={goNext}
				disabled={!canGoNext}
				className={styles.button}
			>
				Следующий{' '}
				<svg
					className={styles.icon}
					width="8"
					height="16"
					viewBox="0 0 8 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.26192 0.180571C0.576414 -0.0889955 1.04989 -0.0525743 1.31946 0.26192L7.31946 7.26192C7.5602 7.54279 7.5602 7.95724 7.31946 8.23811L1.31946 15.2381C1.04989 15.5526 0.576414 15.589 0.26192 15.3195C-0.0525743 15.0499 -0.0889955 14.5764 0.180571 14.2619L5.76221 7.75001L0.180571 1.23811C-0.0889955 0.923613 -0.0525743 0.450138 0.26192 0.180571Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
	)
}

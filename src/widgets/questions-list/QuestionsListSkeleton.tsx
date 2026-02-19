import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import styles from './QuestionsListSkeleton.module.css'

export const QuestionsListSkeleton = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.header}>
				<Skeleton
					height="32px"
					width="160px"
				/>
			</div>
			<div className={styles.list}>
				{Array.from({ length: 10 }).map((_, index) => (
					<div
						key={index}
						className={styles.card}
					>
						<Skeleton height="56px" />
					</div>
				))}
				<div className={styles.pagination}>
					<Skeleton
						width="300px"
						height="35px"
					/>
				</div>
			</div>
		</div>
	)
}

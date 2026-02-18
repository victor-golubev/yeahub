import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Surface } from '@/shared/ui/Surface/Surface'
import styles from './QuestionFiltersSkeleton.module.css'

export const QuestionFiltersSkeleton = () => {
	return (
		<div className={styles.aside}>
			<Surface>
				<div className={styles.layout}>
					<Skeleton height="48px" />
					<div className={styles.block}>
						<Skeleton
							height="20px"
							width="130px"
						/>

						{Array.from({ length: 5 }).map((_, index) => (
							<Skeleton
								height="42px"
								width="210px"
								key={index}
							/>
						))}
						<Skeleton
							height="20px"
							width="130px"
						/>
					</div>

					<div className={styles.block}>
						<Skeleton
							height="20px"
							width="130px"
						/>
						<div className={styles.row}>
							{Array.from({ length: 5 }).map((_, index) => (
								<Skeleton
									height="42px"
									width="90px"
									key={index}
								/>
							))}
						</div>

						<Skeleton
							height="20px"
							width="130px"
						/>
					</div>

					<div className={styles.block}>
						<Skeleton
							height="20px"
							width="130px"
						/>
						<div className={styles.row}>
							{Array.from({ length: 5 }).map((_, index) => (
								<Skeleton
									height="42px"
									width="56px"
									key={index}
								/>
							))}
						</div>
					</div>

					<div className={styles.block}>
						<Skeleton
							height="20px"
							width="130px"
						/>
						<div className={styles.row}>
							{Array.from({ length: 5 }).map((_, index) => (
								<Skeleton
									height="40px"
									width="42px"
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</Surface>
		</div>
	)
}

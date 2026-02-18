import { Container } from '@/shared/ui/Container/Container'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Surface } from '@/shared/ui/Surface/Surface'
import styles from './QuestionsDetailsPageSkeleton.module.css'

export const QuestionDetailsPageSkeleton = () => (
	<Container>
		<div className={styles.layout}>
			<div className={styles.main}>
				<div className={styles.list}>
					<Surface>
						<div className={styles.item}>
							<Skeleton
								height="32px"
								width="50%"
							/>
							<Skeleton
								height="48px"
								width="100%"
							/>
						</div>
					</Surface>
					<Surface>
						<div className={`${styles.item} ${styles.nav}`}>
							<Skeleton
								height="44px"
								width="182px"
							/>
							<Skeleton
								height="44px"
								width="182px"
							/>
						</div>
					</Surface>
					<Surface>
						<div className={styles.item}>
							<Skeleton
								height="32px"
								width="200px"
							/>
							<Skeleton
								height="120px"
								width="100%"
							/>
						</div>
					</Surface>
					<Surface>
						<div className={styles.item}>
							<Skeleton
								height="32px"
								width="250px"
							/>
							<Skeleton
								height="120px"
								width="100%"
							/>
						</div>
					</Surface>
				</div>
			</div>
			<Surface>
				<div className={styles.aside}>
					<div className={styles.meta}>
						<Skeleton
							height="24px"
							width="80px"
						/>
						<div className={styles.metaList}>
							<Skeleton
								height="30px"
								width="120px"
							/>
							<Skeleton
								height="30px"
								width="120px"
							/>
						</div>
					</div>

					<div className={styles.meta}>
						<Skeleton
							height="24px"
							width="80px"
						/>
						<div className={styles.metaList}>
							<Skeleton
								height="40px"
								width="100px"
							/>
							<Skeleton
								height="40px"
								width="100px"
							/>
						</div>
					</div>

					<div className={styles.meta}>
						<Skeleton
							height="24px"
							width="80px"
						/>
						<div className={styles.metaList}>
							<Skeleton
								height="24px"
								width="70px"
							/>
							<Skeleton
								height="24px"
								width="70px"
							/>
						</div>
					</div>
				</div>
			</Surface>
		</div>
	</Container>
)

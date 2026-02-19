import { Container } from '@/shared/ui/Container/Container'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Surface } from '@/shared/ui/Surface/Surface'
import styles from './QuestionDetailsPageSkeleton.module.css'

export const QuestionDetailsPageSkeleton = () => (
	<Container>
		<div className={styles.layout}>
			<div className={styles.breadcrumbs}>
				<Skeleton
					height="24px"
					width="80px"
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.primary}>
					<div className={styles.sectionList}>
						<Surface>
							<div className={styles.section}>
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
							<div className={styles.actions}>
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
							<div className={styles.section}>
								<Skeleton
									height="32px"
									width="200px"
								/>
								<Skeleton
									height="200px"
									width="100%"
								/>
							</div>
						</Surface>
						<Surface>
							<div className={styles.section}>
								<Skeleton
									height="32px"
									width="250px"
								/>
								<Skeleton
									height="300px"
									width="100%"
								/>
							</div>
						</Surface>
					</div>
				</div>
				<div className={styles.aside}>
					<Surface>
						<div className={styles.info}>
							<div className={styles.group}>
								<Skeleton
									height="24px"
									width="80px"
								/>
								<div className={styles.values}>
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

							<div className={styles.group}>
								<Skeleton
									height="24px"
									width="80px"
								/>
								<div className={styles.values}>
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

							<div className={styles.group}>
								<Skeleton
									height="24px"
									width="80px"
								/>
								<div className={styles.values}>
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
			</div>
		</div>
	</Container>
)

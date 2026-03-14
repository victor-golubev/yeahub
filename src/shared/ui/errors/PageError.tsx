import { Button, Container, Surface } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import styles from './PageError.module.css'

interface PageErrorProps {
	message?: string
	onRetry?: () => void
}

export const PageError = ({
	message = 'Произошла ошибка',
	onRetry
}: PageErrorProps) => {
	const navigate = useNavigate()

	return (
		<Container>
			<Surface>
				<div className={styles.layout}>
					<h2 className={styles.title}>Ошибка загрузки</h2>
					<p>{message}</p>
					<div className={styles.buttons}>
						{onRetry && (
							<Button
								onClick={onRetry}
								className={styles.button}
							>
								Повторить попытку
							</Button>
						)}
						<Button
							variant="secondary"
							onClick={() => navigate(-1)}
							className={styles.button}
						>
							Назад
						</Button>
					</div>
				</div>
			</Surface>
		</Container>
	)
}

interface PageErrorProps {
	message?: string
	onRetry?: () => void
}

export const PageError = ({
	message = 'Произошла ошибка',
	onRetry
}: PageErrorProps) => (
	<div className="page-error">
		<h2>Ошибка загрузки</h2>
		<p>{message}</p>
		{onRetry && (
			<button
				onClick={onRetry}
				className="button"
			>
				Повторить попытку
			</button>
		)}
	</div>
)

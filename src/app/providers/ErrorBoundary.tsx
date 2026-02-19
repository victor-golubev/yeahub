import { Component, ReactNode } from 'react'

interface Props {
	children: ReactNode
	fallback?: ReactNode
}

interface State {
	hasError: boolean
	error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: any) {
		console.error('ErrorBoundary caught an error:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback
			}

			return (
				<div className="error-boundary">
					<h1>Что-то пошло не так</h1>
					<p>Произошла ошибка при загрузке страницы.</p>
					<button onClick={() => window.location.reload()}>
						Перезагрузить страницу
					</button>

					{process.env.NODE_ENV === 'development' && this.state.error && (
						<details style={{ marginTop: '1rem' }}>
							<summary>Детали ошибки (dev only)</summary>
							<pre style={{ whiteSpace: 'pre-wrap' }}>
								{this.state.error.toString()}
								{this.state.error.stack}
							</pre>
						</details>
					)}
				</div>
			)
		}

		return this.props.children
	}
}

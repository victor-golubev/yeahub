// App.tsx

import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { appRouter } from '@/app/router'
import { store } from '@/app/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

/**
 * Корневой компонент приложения
 */
function App() {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<RouterProvider router={appRouter} />
			</Provider>
		</ErrorBoundary>
	)
}

export default App

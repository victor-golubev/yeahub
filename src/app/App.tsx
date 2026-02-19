import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { appRouter } from '@/app/appRouter'
import { store } from '@/app/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

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

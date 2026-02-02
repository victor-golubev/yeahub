import { appRouter } from '@/app/providers/router'
import { store } from '@/app/store'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

export const App = () => (
	<ReduxProvider store={store}>
		<RouterProvider router={appRouter} />
	</ReduxProvider>
)

export default App

// App.tsx

import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { appRouter } from '@/app/router'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

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

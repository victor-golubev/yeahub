// app/router.tsx

import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { BaseLayout } from './layouts/BaseLayout'

// Lazy loading страниц для code splitting
const QuestionsPage = lazy(() =>
  import('@/pages/questions-list').then((module) => ({
    default: module.QuestionsPage,
  }))
)

const QuestionDetailsPage = lazy(() =>
  import('@/pages/question-details').then((module) => ({
    default: module.QuestionDetailsPage,
  }))
)

/**
 * Конфигурация роутинга приложения
 */
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/questions" replace />,
      },
      {
        path: 'questions',
        element: <QuestionsPage />,
      },
      {
        path: 'questions/:id',
        element: <QuestionDetailsPage />,
      },
      {
        path: '*',
        element: (
          <div className="page-404">
            <h1>404 - Страница не найдена</h1>
            <Navigate to="/questions" replace />
          </div>
        ),
      },
    ],
  },
])

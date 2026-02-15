// app/router.tsx

import { BaseLayout } from '@/shared/ui/layouts/BaseLayout'
import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const QuestionsPage = lazy(() =>
	import('@/pages/questions-list').then(module => ({
		default: module.QuestionsPage
	}))
)

const QuestionDetailsPage = lazy(() =>
	import('@/pages/question-details').then(module => ({
		default: module.QuestionDetailsPage
	}))
)

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		children: [
			{
				index: true,
				element: (
					<Navigate
						to="/questions"
						replace
					/>
				)
			},
			{
				path: 'questions',
				element: <QuestionsPage />
			},
			{
				path: 'questions/:id',
				element: <QuestionDetailsPage />
			},
			{
				path: '*',
				element: (
					<div className="page-404">
						<h1>404 - Страница не найдена</h1>
						<Navigate
							to="/questions"
							replace
						/>
					</div>
				)
			}
		]
	}
])

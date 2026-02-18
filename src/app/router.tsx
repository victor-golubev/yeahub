import { QuestionDetailsPageSkeleton } from '@/pages/question-details'
import { QuestionsPageSkeleton } from '@/pages/questions-list'
import { PageError } from '@/shared/ui/errors/PageError'
import { BaseLayout } from '@/shared/ui/layouts/BaseLayout'
import { lazy, Suspense } from 'react'
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
		errorElement: <PageError />,
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
				element: (
					<Suspense fallback={<QuestionsPageSkeleton />}>
						<QuestionsPage />
					</Suspense>
				)
			},
			{
				path: 'questions/:id',
				element: (
					<Suspense fallback={<QuestionDetailsPageSkeleton />}>
						<QuestionDetailsPage />
					</Suspense>
				)
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

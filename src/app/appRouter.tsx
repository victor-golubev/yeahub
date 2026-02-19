import { QuestionDetailsPageSkeleton } from '@/pages/question-details'
import { QuestionsPageSkeleton } from '@/pages/questions-list'
import { ROUTES } from '@/shared/config'
import { PageError } from '@/shared/ui/errors/PageError'
import { BaseLayout } from '@/app/layouts/BaseLayout'
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
						to={ROUTES.QUESTIONS}
						replace
					/>
				)
			},
			{
				path: ROUTES.QUESTIONS,
				element: (
					<Suspense fallback={<QuestionsPageSkeleton />}>
						<QuestionsPage />
					</Suspense>
				)
			},
			{
				path: ROUTES.QUESTION_ITEM,
				element: (
					<Suspense fallback={<QuestionDetailsPageSkeleton />}>
						<QuestionDetailsPage />
					</Suspense>
				)
			},
			{
				path: '*',
				element: (
					<PageError
						message="Страница не найдена"
						onRetry={() => window.location.assign(ROUTES.QUESTIONS)}
					/>
				)
			}
		]
	}
])

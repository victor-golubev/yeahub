import BaseLayout from '@/app/layouts/BaseLayout'
import { QuestionDetailsPage } from '@/pages/question-details'
import { QuestionsPage } from '@/pages/questions-list'
import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		children: [
			{ path: 'questions', element: <QuestionsPage /> },
			{ path: 'questions/:id', element: <QuestionDetailsPage /> },
			{ path: '', element: <QuestionsPage /> }
		]
	}
])

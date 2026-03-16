import { HtmlContent } from '@/shared/ui'

type Props = {
	shortAnswer: string
	longAnswer: string
}

export const QuestionAnswers = ({ shortAnswer, longAnswer }: Props) => {
	return (
		<>
			<HtmlContent
				title="Краткий ответ"
				content={shortAnswer}
			/>
			<HtmlContent
				title="Подробный ответ"
				content={longAnswer}
				collapsible
			/>
		</>
	)
}

import { Link } from 'react-router-dom'

interface Props {
	id: number
	title: string
	complexity: number
	questionSpecializations?: any
}

export const QuestionCard = ({
	id,
	title,
	complexity,
	questionSpecializations
}: Props) => {
	return (
		<div>
			<h4>{title}</h4>
			<p>Сложность: {complexity}</p>
			<Link to={`/questions/${id}`}>Перейти к вопросу</Link>
		</div>
	)
}

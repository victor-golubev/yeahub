import { useGetQuestionByIdQuery } from '@/entities/question'
import { useParams } from 'react-router-dom'

export const QuestionDetailsPage = () => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <div>Некорректный id вопроса</div>
	}

	const { data, isLoading, isError } = useGetQuestionByIdQuery(id)

	if (isLoading) return <p>Загрузка...</p>
	if (isError || !data) return <p>Вопрос не найден</p>

	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.description}</p>
			<div>
				<div>
					<p>Краткий ответ</p>
				</div>
				<div>{data.shortAnswer}</div>
			</div>
			<div>
				<div>
					<p>Полный ответ</p>
				</div>
				<div>{data.longAnswer}</div>
			</div>
			<div>
				<div>
					<p>Уровень:</p>
					<ul>
						<li>
							<p>Рейтинг:</p>
							<p>{data.rate}</p>
						</li>
						<li>
							<p>Рейтинг:</p>
							<p>{data.complexity}</p>
						</li>
					</ul>
				</div>
				<div>
					<p>Навыки:</p>
					<ul>
						{data.questionSkills.map((skill: any) => (
							<li key={skill.id}>
								<div>
									<div>
										<img
											src={skill.imageSrc}
											alt={skill.title}
										/>
									</div>
									<p>{skill.title}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				<p>Ключевые слова:</p>

				<ul>
					{data.keywords.map((keyword: any) => (
						<li key={keyword}>
							<a href={`/questions?page=1&keywords=${keyword}`}>{keyword}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

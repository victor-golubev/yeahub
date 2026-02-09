// pages/question-details/ui/QuestionDetailsPage.tsx

import { useGetQuestionByIdQuery } from '@/entities/question'
import { Link, Navigate, useParams } from 'react-router-dom'

/**
 * Страница детальной информации о вопросе
 */
export const QuestionDetailsPage = () => {
	const { id } = useParams<{ id: string }>()

	// Валидация ID
	if (!id || isNaN(Number(id))) {
		return (
			<Navigate
				to="/questions"
				replace
			/>
		)
	}

	const {
		data: question,
		isLoading,
		isError,
		error
	} = useGetQuestionByIdQuery(id)

	// Загрузка
	if (isLoading) {
		return (
			<div className="question-details">
				<div className="question-details__loading">
					{/* TODO: Добавить скелетон */}
					<p>Загрузка вопроса...</p>
				</div>
			</div>
		)
	}

	// Ошибка или вопрос не найден
	if (isError || !question) {
		return (
			<div className="question-details">
				<div className="question-details__error">
					<h1>Вопрос не найден</h1>
					<p>К сожалению, запрашиваемый вопрос не существует или был удален.</p>
					<Link
						to="/questions"
						className="button"
					>
						← Вернуться к списку
					</Link>
				</div>
			</div>
		)
	}

	return (
		<article className="question-details">
			{/* Хлебные крошки */}
			<nav className="question-details__breadcrumbs">
				<Link to="/questions">Вопросы</Link>
				<span> / </span>
				<span>{question.title}</span>
			</nav>

			{/* Заголовок */}
			<header className="question-details__header">
				<h1 className="question-details__title">{question.title}</h1>

				{question.description && (
					<p className="question-details__description">
						{question.description}
					</p>
				)}
			</header>

			{/* Метаданные */}
			<aside className="question-details__meta">
				<div className="question-details__meta-item">
					<span className="label">Сложность:</span>
					<span className="value">{question.complexity}</span>
				</div>

				<div className="question-details__meta-item">
					<span className="label">Рейтинг:</span>
					<span className="value">{question.rate}</span>
				</div>
			</aside>

			{/* Ответы */}
			<section className="question-details__answers">
				{/* Краткий ответ */}
				<div className="question-details__answer">
					<h2 className="question-details__answer-title">Краткий ответ</h2>
					<div
						className="question-details__answer-content"
						dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
					/>
				</div>

				{/* Полный ответ */}
				<div className="question-details__answer">
					<h2 className="question-details__answer-title">Подробный ответ</h2>
					<div
						className="question-details__answer-content"
						dangerouslySetInnerHTML={{ __html: question.longAnswer }}
					/>
				</div>
			</section>

			{/* Навыки */}
			{question.questionSkills.length > 0 && (
				<section className="question-details__skills">
					<h2>Связанные навыки</h2>
					<ul className="question-details__skills-list">
						{question.questionSkills.map(skill => (
							<li
								key={skill.id}
								className="question-details__skill"
							>
								{skill.imageSrc && (
									<img
										src={skill.imageSrc}
										alt={skill.title}
										className="question-details__skill-icon"
									/>
								)}
								<span className="question-details__skill-title">
									{skill.title}
								</span>
							</li>
						))}
					</ul>
				</section>
			)}

			{/* Ключевые слова */}
			{question.keywords.length > 0 && (
				<section className="question-details__keywords">
					<h2>Ключевые слова</h2>
					<ul className="question-details__keywords-list">
						{question.keywords.map(keyword => (
							<li key={keyword}>
								<Link
									to={`/questions?page=1&keywords=${encodeURIComponent(keyword)}`}
									className="question-details__keyword-link"
								>
									{keyword}
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}

			{/* Специализации */}
			{question.questionSpecializations.length > 0 && (
				<section className="question-details__specializations">
					<h2>Специализации</h2>
					<ul className="question-details__specializations-list">
						{question.questionSpecializations.map(spec => (
							<li
								key={spec.id}
								className="question-details__specialization"
							>
								<h3>{spec.title}</h3>
								<p>{spec.description}</p>
							</li>
						))}
					</ul>
				</section>
			)}

			{/* Кнопка возврата */}
			<footer className="question-details__footer">
				<Link
					to="/questions"
					className="button"
				>
					← Вернуться к списку вопросов
				</Link>
			</footer>
		</article>
	)
}

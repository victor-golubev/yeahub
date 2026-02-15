import { Surface } from '@/shared/ui/Surface/Surface'
import { Link } from 'react-router-dom'
import styles from './QuestionMeta.module.css'

type Skill = {
	id: number
	title: string
	imageSrc?: string
}

type Props = {
	complexity: number
	rate: number
	skills: Skill[]
	keywords: string[]
}

export const QuestionMeta = ({ complexity, rate, skills, keywords }: Props) => {
	return (
		<Surface>
			<div className={styles.meta}>
				<div className={styles.section}>
					<p className={styles.title}>Уровень</p>
					<ul className={styles.list}>
						<li className={styles.item}>
							<span>Сложность:</span>
							<strong className={styles.value}>{complexity}</strong>
						</li>
						<li className={styles.item}>
							<span>Рейтинг:</span>
							<strong className={styles.value}>{rate}</strong>
						</li>
					</ul>
				</div>

				{skills.length > 0 && (
					<div className={styles.section}>
						<p className={styles.title}>Навыки</p>
						<ul className={styles.list}>
							{skills.map(skill => (
								<li key={skill.id}>
									<Link
										to={`/questions?page=1&skills=${skill.id}`}
										className={styles.skill}
									>
										{skill.imageSrc && (
											<img
												src={skill.imageSrc}
												alt={skill.title}
											/>
										)}
										<span>{skill.title}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}

				{keywords.length > 0 && (
					<div className={styles.section}>
						<p className={styles.title}>Ключевые слова</p>
						<ul className={styles.list}>
							{keywords.map(keyword => (
								<li
									key={keyword}
									className={styles.keyword}
								>
									<Link to={`/questions?page=1&keywords=${keyword}`}>
										#{keyword}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</Surface>
	)
}

import { Surface } from '@/shared/ui/Surface/Surface'
import { Link } from 'react-router-dom'
import styles from './QuestionInfo.module.css'

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

export const QuestionInfo = ({ complexity, rate, skills, keywords }: Props) => {
	return (
		<div className={styles.aside}>
			<Surface>
				<div className={styles.info}>
					<div className={styles.section}>
						<p className={styles.title}>Уровень</p>
						<ul className={styles.list}>
							<li className={styles.item}>
								<div className={styles.complexity}>
									<span>Сложность:</span>
									<strong className={styles.value}>{complexity}</strong>
								</div>
							</li>
							<li className={styles.item}>
								<div className={styles.complexity}>
									<span>Рейтинг:</span>
									<strong className={styles.value}>{rate}</strong>
								</div>
							</li>
						</ul>
					</div>

					{skills.length > 0 && (
						<div className={styles.section}>
							<p className={styles.title}>Навыки</p>
							<ul className={styles.list}>
								{skills.map(skill => (
									<li
										key={skill.id}
										className={styles.item}
									>
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
									<li key={keyword}>
										<Link
											to={`/questions?page=1&keywords=${keyword}`}
											className={styles.keyword}
										>
											#{keyword}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</Surface>
		</div>
	)
}

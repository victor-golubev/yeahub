import { useGetSkillsQuery, type Skill } from '@/entities/skill/api/skillsApi'
import { useSearchParams } from 'react-router-dom'

export const SkillsFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { data: skills = [], isLoading } = useGetSkillsQuery()

	const selected = searchParams.get('skills')?.split(',').map(Number) || []

	const toggleSkill = (id: number) => {
		const params = new URLSearchParams(searchParams)
		const next = selected.includes(id)
			? selected.filter(v => v !== id)
			: [...selected, id]

		if (next.length) params.set('skills', next.join(','))
		else params.delete('skills')

		params.set('page', '1')
		setSearchParams(params)
	}

	if (isLoading) return <p>Загрузка навыков...</p>
	if (!skills.length) return <p>Навыки не найдены</p>

	return (
		<div
			style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}
		>
			<span>Навыки:</span>
			{skills.map((skill: Skill) => {
				const active = selected.includes(skill.id)
				return (
					<button
						key={skill.id}
						onClick={() => toggleSkill(skill.id)}
						style={{
							padding: '6px 10px',
							borderRadius: 20,
							border: '1px solid #2563eb',
							backgroundColor: active ? '#2563eb' : 'white',
							color: active ? 'white' : '#2563eb',
							cursor: 'pointer',
							transition: 'all 0.2s'
						}}
					>
						{skill.title}
					</button>
				)
			})}
		</div>
	)
}

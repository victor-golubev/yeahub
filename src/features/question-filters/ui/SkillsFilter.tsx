import { useGetSkillsQuery } from '@/entities/skill/api/skillsApi'

interface SkillsFilterProps {
	value?: number[]
	onChange: (skill: number[]) => void
	specializationId: string
}

export const SkillsFilter = ({
	value = [],
	onChange,
	specializationId
}: SkillsFilterProps) => {
	const { data: skills, isLoading } = useGetSkillsQuery({
		limit: 5,
		specializations: specializationId
	})

	const handleToggle = (id: number) => {
		if (value.includes(id)) {
			onChange(value.filter(v => v !== id))
		} else {
			onChange([...value, id])
		}
	}

	if (isLoading) return <div>Загрузка...</div>
	if (!skills?.length) return null

	return (
		<div>
			<h3>Выберите навыки</h3>

			<div
				role="group"
				aria-label="Фильтр по навыкам"
			>
				{skills?.map(skill => {
					const selected = value.includes(skill.id)

					return (
						<button
							key={skill.id}
							type="button"
							aria-pressed={selected}
							onClick={() => handleToggle(skill.id)}
							style={selected ? { background: 'red' } : {}}
						>
							{skill.title}
						</button>
					)
				})}
			</div>
		</div>
	)
}

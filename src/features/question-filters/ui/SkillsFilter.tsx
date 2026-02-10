import { useGetSkillsQuery } from '@/entities/skill/api/skillsApi'
import { FilterSection } from '@/features/question-filters/ui/FilterSection/FilterSection'
import { Chip } from '@/shared/ui/Chip/Chip'

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
		<FilterSection title="Выберите навыки">
			{skills?.map(skill => {
				const selected = value.includes(skill.id)

				return (
					<Chip
						key={skill.id}
						onClick={() => handleToggle(skill.id)}
						selected={selected}
					>
						{skill.title}
					</Chip>
				)
			})}
		</FilterSection>
	)
}

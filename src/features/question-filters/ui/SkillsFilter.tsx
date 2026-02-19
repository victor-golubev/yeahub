import { useGetSkillsQuery } from '@/entities/skill'
import { Chip } from '@/shared/ui/Chip/Chip'
import { FilterSection } from '@/shared/ui/FilterSection/FilterSection'
import { FilterToggle } from '@/shared/ui/FilterToggle/FilterToggle'
import { useState } from 'react'

const VISIBLE_COUNT = 5

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
	const { data: skills, isLoading } = useGetSkillsQuery(
		{ specializations: specializationId },
		{ skip: !specializationId }
	)

	const [expanded, setExpanded] = useState(false)

	const visibleSkills = expanded ? skills : skills?.slice(0, VISIBLE_COUNT)

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
		<FilterSection
			title="Выберите навыки"
			footer={
				skills.length > VISIBLE_COUNT && (
					<FilterToggle
						expanded={expanded}
						onToggle={() => setExpanded(prev => !prev)}
					/>
				)
			}
		>
			{visibleSkills?.map(skill => {
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

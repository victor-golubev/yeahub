import { useGetSkillsQuery } from '@/entities/skill'
import { FILTER_VISIBLE_COUNT } from '@/shared/constants'
import { Chip, FilterSection, FilterToggle, Skeleton } from '@/shared/ui'
import { useState } from 'react'

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

	const visibleSkills = expanded
		? skills
		: skills?.slice(0, FILTER_VISIBLE_COUNT)

	const handleToggle = (id: number) => {
		if (value.includes(id)) {
			onChange(value.filter(v => v !== id))
		} else {
			onChange([...value, id])
		}
	}

	if (isLoading)
		return (
			<FilterSection title="Выберите навыки">
				{Array.from({ length: FILTER_VISIBLE_COUNT }).map((_, i) => (
					<Skeleton
						key={i}
						height="36px"
					/>
				))}
			</FilterSection>
		)

	if (!skills?.length) return null

	return (
		<FilterSection
			title="Выберите навыки"
			footer={
				skills.length > FILTER_VISIBLE_COUNT && (
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

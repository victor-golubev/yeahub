import {
	useGetSpecializationsQuery,
	type Specialization
} from '@/entities/specialization'
import { FILTER_VISIBLE_COUNT } from '@/shared/constants'
import { Chip, FilterSection, FilterToggle, Skeleton } from '@/shared/ui'
import { useState } from 'react'

interface SpecializationFilterProps {
	value?: string
	onChange: (id?: string) => void
}

export const SpecializationFilter = ({
	value,
	onChange
}: SpecializationFilterProps) => {
	const { data: response, isLoading } = useGetSpecializationsQuery()

	const specializations = response?.data || []

	const [expanded, setExpanded] = useState(false)

	const visibleSpecializations = expanded
		? specializations
		: specializations?.slice(0, FILTER_VISIBLE_COUNT)

	if (isLoading)
		return (
			<FilterSection title="Специализация">
				{Array.from({ length: FILTER_VISIBLE_COUNT }).map((_, i) => (
					<Skeleton
						key={i}
						height="36px"
					/>
				))}
			</FilterSection>
		)

	if (!specializations.length) return null

	return (
		<FilterSection
			title="Специализация"
			footer={
				specializations.length > FILTER_VISIBLE_COUNT && (
					<FilterToggle
						expanded={expanded}
						onToggle={() => setExpanded(prev => !prev)}
					/>
				)
			}
		>
			{visibleSpecializations.map((spec: Specialization) => {
				const selected = String(spec.id) === value
				return (
					<Chip
						key={spec.id}
						onClick={() => onChange(selected ? undefined : String(spec.id))}
						selected={selected}
					>
						{spec.title}
					</Chip>
				)
			})}
		</FilterSection>
	)
}

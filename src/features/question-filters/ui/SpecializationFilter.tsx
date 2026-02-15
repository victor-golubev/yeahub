import {
	useGetSpecializationsQuery,
	type Specialization
} from '@/entities/specialization'
import { Chip } from '@/shared/ui/Chip/Chip'
import { FilterSection } from '@/shared/ui/FilterSection/FilterSection'
import { FilterToggle } from '@/shared/ui/FilterToggle/FilterToggle'
import { useState } from 'react'

const VISIBLE_COUNT = 5

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
		: specializations?.slice(0, VISIBLE_COUNT)

	if (isLoading) return <div>Загрузка...</div>
	if (!specializations.length) return null

	return (
		<FilterSection
			title="Специализация"
			footer={
				specializations.length > VISIBLE_COUNT && (
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

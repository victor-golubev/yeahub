import { useGetSpecializationsQuery } from '@/entities/specialization'
import { FilterSection } from '@/features/question-filters/ui/FilterSection/FilterSection'
import { Chip } from '@/shared/ui/Chip/Chip'

interface SpecializationFilterProps {
	value?: string
	onChange: (id?: string) => void
}

export const SpecializationFilter = ({
	value,
	onChange
}: SpecializationFilterProps) => {
	const { data: specializations, isLoading } = useGetSpecializationsQuery()

	if (isLoading) return <div>Загрузка...</div>
	if (!specializations?.data.length) return null

	return (
		<FilterSection title="Специализация">
			{specializations.data.map(spec => {
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

import { useGetSpecializationsQuery } from '@/entities/specialization'

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
		<div>
			<h3>Специализация</h3>
			<div
				role="group"
				aria-label="Фильтр по специализации"
			>
				{specializations?.data.map(spec => {
					const selected = String(spec.id) === value

					return (
						<button
							key={spec.id}
							type="button"
							onClick={() => onChange(selected ? undefined : String(spec.id))}
							style={selected ? { background: 'red' } : {}}
							aria-pressed={selected}
							aria-label={spec.title}
						>
							{spec.title}
						</button>
					)
				})}
			</div>
		</div>
	)
}

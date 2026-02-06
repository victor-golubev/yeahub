import { COMPLEXITY_RANGES } from '@/shared/constants/complexity'

interface ComplexityFilterProps {
	value?: number[]
	onChange: (value: number[]) => void
}

export const ComplexityFilter = ({
	value = [],
	onChange
}: ComplexityFilterProps) => {
	const handleClick = (complexity: readonly number[]) => {
		if (complexity.some(c => value.includes(c))) {
			onChange([...value.filter(v => !complexity.includes(v))])
		} else {
			onChange([...value, ...complexity])
		}
	}

	return (
		<div>
			<h3>Сложность вопросов</h3>
			<div
				role="group"
				aria-label="Фильтр по сложности"
			>
				{COMPLEXITY_RANGES.map(complexity => {
					const selected = complexity.values.some(c => value.includes(c))
					return (
						<button
							key={complexity.label}
							type="button"
							onClick={() => handleClick(complexity.values)}
							style={selected ? { background: 'red' } : {}}
							aria-pressed={selected}
							aria-label={complexity.label}
						>
							{complexity.label}
						</button>
					)
				})}
			</div>
		</div>
	)
}

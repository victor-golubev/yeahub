import { COMPLEXITY_RANGES } from '@/shared/constants/complexity'
import { Chip } from '@/shared/ui/Chip/Chip'
import { FilterSection } from '@/shared/ui/FilterSection/FilterSection'

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
		<FilterSection title="Сложность вопросов">
			{COMPLEXITY_RANGES.map(complexity => {
				const selected = complexity.values.some(c => value.includes(c))
				return (
					<Chip
						key={complexity.label}
						onClick={() => handleClick(complexity.values)}
						selected={selected}
					>
						{complexity.label}
					</Chip>
				)
			})}
		</FilterSection>
	)
}

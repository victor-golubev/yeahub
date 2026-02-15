import { RATE_VALUES } from '@/shared/constants/rate'
import { Chip } from '@/shared/ui/Chip/Chip'
import { FilterSection } from '@/shared/ui/FilterSection/FilterSection'

interface RateFilterProps {
	value?: number[]
	onChange: (value: number[]) => void
}

export const RateFilter = ({ value = [], onChange }: RateFilterProps) => {
	const isSelected = (rate: number) => value.includes(rate)

	const handleToggle = (rate: number) => {
		const newValue = isSelected(rate)
			? value.filter(v => v !== rate)
			: [...value, rate]

		onChange(newValue)
	}

	return (
		<FilterSection title="Рейтинг вопроса">
			{RATE_VALUES.map(rate => {
				const selected = isSelected(rate)

				return (
					<Chip
						key={rate}
						onClick={() => handleToggle(rate)}
						selected={selected}
					>
						{rate}
					</Chip>
				)
			})}
		</FilterSection>
	)
}

import { RATE_VALUES } from '@/shared/constants/rate'

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
		<div>
			<h3>Рейтинг вопроса</h3>

			<div
				role="group"
				aria-label="Фильтр по рейтингу"
			>
				{RATE_VALUES.map(rate => {
					const selected = isSelected(rate)

					return (
						<button
							key={rate}
							type="button"
							onClick={() => handleToggle(rate)}
							style={selected ? { background: 'red' } : {}}
							aria-pressed={selected}
							aria-label={`Рейтинг ${rate}`}
						>
							{rate}
						</button>
					)
				})}
			</div>
		</div>
	)
}

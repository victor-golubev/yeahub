import { RATE_VALUES } from '@/shared/constants/rate'

interface RateFilterProps {
	value?: number[]
	onChange: (value: number[]) => void
}

export const RateFilter = ({ value = [], onChange }: RateFilterProps) => {
	const handleClick = (rate: number) => {
		if (value.includes(rate)) {
			onChange([...value.filter(v => v !== rate)])
		} else {
			onChange([...value, rate])
		}
	}

	return (
		<div>
			{RATE_VALUES.map(rate => (
				<button
					key={rate}
					onClick={() => handleClick(rate)}
					style={value.includes(rate) ? { background: 'red' } : {}}
				>
					{rate}
				</button>
			))}
		</div>
	)
}

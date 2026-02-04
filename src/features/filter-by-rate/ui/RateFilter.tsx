import { RATE_VALUES, type RateValue } from '@/shared/constants/rate'
import { useSearchParams } from 'react-router-dom'

export const RateFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const selected = (searchParams.get('rate')?.split(',').map(Number) ||
		[]) as RateValue[]

	const toggleRate = (value: RateValue) => {
		const params = new URLSearchParams(searchParams)

		const next = selected.includes(value)
			? selected.filter(v => v !== value)
			: [...selected, value]

		if (next.length) {
			params.set('rate', next.join(','))
		} else {
			params.delete('rate')
		}

		params.set('page', '1')

		setSearchParams(params)
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: 10,
				marginBottom: 20,
				alignItems: 'center'
			}}
		>
			<span>Рейтинг:</span>
			{RATE_VALUES.map(v => {
				const active = selected.includes(v)
				return (
					<button
						key={v}
						onClick={() => toggleRate(v)}
						style={{
							padding: '8px 12px',
							borderRadius: 20,
							border: '1px solid #2563eb',
							backgroundColor: active ? '#2563eb' : 'white',
							color: active ? 'white' : '#2563eb',
							cursor: 'pointer',
							transition: 'all 0.2s'
						}}
					>
						{v}
					</button>
				)
			})}
		</div>
	)
}

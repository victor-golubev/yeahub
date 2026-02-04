import { COMPLEXITY_RANGES } from '@/shared/constants/complexity'
import { useSearchParams } from 'react-router-dom'

export const ComplexityFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const selected = searchParams.getAll('complexity')

	const toggleRange = (label: string) => {
		const params = new URLSearchParams(searchParams)

		const isSelected = selected.includes(label)

		params.delete('complexity')

		const next = isSelected
			? selected.filter(l => l !== label)
			: [...selected, label]

		next.forEach(l => params.append('complexity', l))

		params.set('page', '1')

		setSearchParams(params)
	}

	return (
		<div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
			<span>Сложность:</span>

			{COMPLEXITY_RANGES.map(r => {
				const active = selected.includes(r.label)

				return (
					<button
						key={r.label}
						onClick={() => toggleRange(r.label)}
						style={{
							padding: '8px 12px',
							borderRadius: 20,
							border: '1px solid #2563eb',
							background: active ? '#2563eb' : '#fff',
							color: active ? '#fff' : '#2563eb'
						}}
					>
						{r.label}
					</button>
				)
			})}
		</div>
	)
}

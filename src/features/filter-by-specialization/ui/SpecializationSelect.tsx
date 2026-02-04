import { useGetSpecializationsQuery } from '@/entities/specialization'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SpecializationList = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { data, isLoading } = useGetSpecializationsQuery({ limit: 999 })
	const [isExpanded, setIsExpanded] = useState(false)

	const selectedId = searchParams.get('specialization') || ''

	const allSpecs = data?.data || []

	const visibleSpecs = isExpanded ? allSpecs : allSpecs.slice(0, 5)

	const handleSelect = (id: string) => {
		const params = new URLSearchParams(searchParams)

		if (id === selectedId) {
			params.delete('specialization')
		} else {
			params.set('specialization', id)
		}

		params.set('page', '1')
		setSearchParams(params)
	}

	if (isLoading) return <div>Загрузка категорий...</div>

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
			<h3>Специализации</h3>

			{visibleSpecs.map((spec: any) => (
				<button
					key={spec.id}
					onClick={() => handleSelect(String(spec.id))}
					style={{
						backgroundColor: selectedId === String(spec.id) ? '#2563eb' : ''
					}}
				>
					{spec.title}
				</button>
			))}

			{allSpecs.length > 5 && (
				<button onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? 'Скрыть' : `Посмотреть все`}
				</button>
			)}
		</div>
	)
}

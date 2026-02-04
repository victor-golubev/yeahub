import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [value, setValue] = useState(searchParams.get('search') || '')

	useEffect(() => {
		const timer = setTimeout(() => {
			const params = new URLSearchParams(searchParams)
			if (value) {
				params.set('search', value)
			} else {
				params.delete('search')
			}
			params.set('page', '1')
			setSearchParams(params)
		}, 500)

		return () => clearTimeout(timer)
	}, [value])

	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder="Поиск по названию..."
			/>
		</div>
	)
}

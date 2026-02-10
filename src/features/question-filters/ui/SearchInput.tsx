import { useEffect, useState } from 'react'
import styles from './SearchInput.module.css'

interface SearchInputProps {
	value?: string
	onSearch: (value: string) => void
	placeholder?: string
	debounceMs?: number
}

/**
 * Поле поиска с debounce
 *
 * @example
 * <SearchInput
 *   value={filters.search}
 *   onSearch={(value) => updateFilters({ search: value })}
 * />
 */
export const SearchInput = ({
	value = '',
	onSearch,
	placeholder = 'Поиск по названию...',
	debounceMs = 500
}: SearchInputProps) => {
	const [localValue, setLocalValue] = useState(value)

	// Синхронизация с внешним значением
	useEffect(() => {
		setLocalValue(value)
	}, [value])

	// Debounce для поиска
	useEffect(() => {
		const timer = setTimeout(() => {
			if (localValue !== value) {
				onSearch(localValue)
			}
		}, debounceMs)

		return () => clearTimeout(timer)
	}, [localValue, value, onSearch, debounceMs])

	return (
		<div className={styles.search}>
			<input
				type="text"
				value={localValue}
				onChange={e => setLocalValue(e.target.value)}
				placeholder={placeholder}
				className={styles.input}
			/>
			{localValue && (
				<button
					onClick={() => {
						setLocalValue('')
						onSearch('')
					}}
					className={styles.clear}
					aria-label="Очистить"
				>
					×
				</button>
			)}
		</div>
	)
}

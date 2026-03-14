import { SearchIcon } from '@/shared/assets/icons/SearchIcon'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { useEffect, useRef, useState } from 'react'
import styles from './SearchInput.module.css'

interface SearchInputProps {
	value?: string
	onSearch: (value: string) => void
	placeholder?: string
	debounceMs?: number
}

export const SearchInput = ({
	value = '',
	onSearch,
	placeholder = 'Поиск по названию...',
	debounceMs = 500
}: SearchInputProps) => {
	const [localValue, setLocalValue] = useState(value)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleWrapperClick = () => {
		inputRef.current?.focus()
	}

	const debouncedValue = useDebounce(localValue, debounceMs)

	const isExternalUpdate = useRef(false)

	useEffect(() => {
		isExternalUpdate.current = true
		setLocalValue(value)
	}, [value])

	useEffect(() => {
		if (isExternalUpdate.current) {
			isExternalUpdate.current = false
			return
		}
		if (debouncedValue !== value) {
			onSearch(debouncedValue)
		}
	}, [debouncedValue, value, onSearch])

	return (
		<div
			className={styles.search}
			role="button"
			tabIndex={0}
			onClick={handleWrapperClick}
		>
			<SearchIcon className={styles.icon} />
			<input
				type="text"
				value={localValue}
				onChange={e => setLocalValue(e.target.value)}
				placeholder={placeholder}
				className={styles.input}
				ref={inputRef}
			/>
			{localValue && (
				<button
					onClick={e => {
						e.stopPropagation()
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

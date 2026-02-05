// features/question-filters/ui/SearchInput.tsx

import { useState, useEffect } from 'react'

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
  debounceMs = 500,
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
    <div className="search-input">
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        className="search-input__field"
      />
      {localValue && (
        <button
          onClick={() => {
            setLocalValue('')
            onSearch('')
          }}
          className="search-input__clear"
          aria-label="Очистить"
        >
          ×
        </button>
      )}
    </div>
  )
}

// shared/ui/Pagination/Pagination.tsx

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  maxVisiblePages?: number
}

/**
 * Компонент пагинации
 * 
 * Отображает:
 * - Кнопки навигации (назад/вперед)
 * - Номера страниц с умным сокращением (...)
 * - Активную страницу
 * 
 * @example
 * <Pagination
 *   currentPage={5}
 *   totalPages={20}
 *   onPageChange={(page) => console.log(page)}
 * />
 */
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 7,
}: PaginationProps) => {
  /**
   * Генерирует массив номеров страниц с "..."
   */
  const getPageNumbers = (): (number | string)[] => {
    // Если страниц мало - показываем все
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const pages: (number | string)[] = []
    const leftSide = Math.floor(maxVisiblePages / 2)
    const rightSide = maxVisiblePages - leftSide - 1

    // Показываем первую страницу
    pages.push(1)

    // Определяем диапазон видимых страниц
    let startPage = Math.max(2, currentPage - leftSide)
    let endPage = Math.min(totalPages - 1, currentPage + rightSide)

    // Корректируем диапазон, если упираемся в края
    if (currentPage <= leftSide + 1) {
      endPage = Math.min(totalPages - 1, maxVisiblePages - 1)
    }
    if (currentPage >= totalPages - rightSide) {
      startPage = Math.max(2, totalPages - maxVisiblePages + 2)
    }

    // Добавляем "..." после первой страницы
    if (startPage > 2) {
      pages.push('...')
    }

    // Добавляем видимые страницы
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Добавляем "..." перед последней страницей
    if (endPage < totalPages - 1) {
      pages.push('...')
    }

    // Показываем последнюю страницу
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPageNumbers()

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page)
    }
  }

  // Не показываем пагинацию, если только одна страница
  if (totalPages <= 1) {
    return null
  }

  return (
    <nav className="pagination" aria-label="Пагинация">
      <button
        className="pagination__button pagination__button--prev"
        onClick={handlePrevious}
        disabled={currentPage <= 1}
        aria-label="Предыдущая страница"
      >
        ←
      </button>

      <ul className="pagination__list">
        {pages.map((page, index) => {
          const isEllipsis = page === '...'
          const isActive = page === currentPage

          return (
            <li key={`${page}-${index}`} className="pagination__item">
              <button
                className={`pagination__button ${
                  isActive ? 'pagination__button--active' : ''
                } ${isEllipsis ? 'pagination__button--ellipsis' : ''}`}
                onClick={() => handlePageClick(page)}
                disabled={isEllipsis || isActive}
                aria-label={
                  isEllipsis
                    ? 'Пропущенные страницы'
                    : `Страница ${page}`
                }
                aria-current={isActive ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>

      <button
        className="pagination__button pagination__button--next"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        aria-label="Следующая страница"
      >
        →
      </button>
    </nav>
  )
}

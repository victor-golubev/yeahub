import styles from './Pagination.module.css'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
	maxVisiblePages?: number
}

export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
	maxVisiblePages = 7
}: PaginationProps) => {
	const getPageNumbers = (): (number | string)[] => {
		if (totalPages <= maxVisiblePages) {
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		}

		const pages: (number | string)[] = []
		const leftSide = Math.floor(maxVisiblePages / 2)
		const rightSide = maxVisiblePages - leftSide - 1

		pages.push(1)

		let startPage = Math.max(2, currentPage - leftSide)
		let endPage = Math.min(totalPages - 1, currentPage + rightSide)

		if (currentPage <= leftSide + 1) {
			endPage = Math.min(totalPages - 1, maxVisiblePages - 1)
		}
		if (currentPage >= totalPages - rightSide) {
			startPage = Math.max(2, totalPages - maxVisiblePages + 2)
		}

		if (startPage > 2) {
			pages.push('...')
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i)
		}

		if (endPage < totalPages - 1) {
			pages.push('...')
		}

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

	if (totalPages <= 1) {
		return null
	}

	return (
		<nav
			className={styles.pagination}
			aria-label="Пагинация"
		>
			<button
				className={`${styles.arrow} ${styles.prev}`}
				onClick={handlePrevious}
				disabled={currentPage <= 1}
				aria-label="Предыдущая страница"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.77529 4.55806C9.01936 4.80214 9.01936 5.19786 8.77529 5.44194L4.84223 9.375H16.6667C17.0119 9.375 17.2917 9.65482 17.2917 10C17.2917 10.3452 17.0119 10.625 16.6667 10.625H4.84223L8.77529 14.5581C9.01936 14.8021 9.01936 15.1979 8.77529 15.4419C8.53121 15.686 8.13548 15.686 7.8914 15.4419L2.8914 10.4419C2.64732 10.1979 2.64732 9.80214 2.8914 9.55806L7.8914 4.55806C8.13548 4.31398 8.53121 4.31398 8.77529 4.55806Z"
						fill="currentColor"
					/>
				</svg>
			</button>

			<ul className={styles.list}>
				{pages.map((page, index) => {
					const isEllipsis = page === '...'
					const isActive = page === currentPage

					return (
						<li
							key={`${page}-${index}`}
							className={styles.item}
						>
							<button
								className={`${styles.button} ${
									isActive ? styles.active : ''
								} ${isEllipsis ? styles.ellipsis : ''}`}
								onClick={() => handlePageClick(page)}
								disabled={isEllipsis || isActive}
								aria-label={
									isEllipsis ? 'Пропущенные страницы' : `Страница ${page}`
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
				className={`${styles.arrow} ${styles.next}`}
				onClick={handleNext}
				disabled={currentPage >= totalPages}
				aria-label="Следующая страница"
			>
				<svg
					width="15"
					height="12"
					viewBox="0 0 15 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.51639 11.0669C8.76047 11.311 9.1562 11.311 9.40027 11.0669L14.4003 6.06694C14.6444 5.82287 14.6444 5.42714 14.4003 5.18306L9.40028 0.18306C9.1562 -0.0610173 8.76047 -0.0610174 8.51639 0.18306C8.27232 0.427137 8.27232 0.822866 8.51639 1.06694L12.4495 5L0.625001 5C0.279823 5 1.04386e-06 5.27982 9.83506e-07 5.625C9.23153e-07 5.97018 0.279823 6.25 0.625001 6.25L12.4495 6.25L8.51639 10.1831C8.27231 10.4271 8.27231 10.8229 8.51639 11.0669Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</nav>
	)
}

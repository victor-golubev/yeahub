import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@/shared/assets/icons/ArrowRightIcon'
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
				<ArrowLeftIcon />
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
				<ArrowRightIcon />
			</button>
		</nav>
	)
}

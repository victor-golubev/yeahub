interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange
}: PaginationProps) => {
	const getPages = () => {
		const pages = []

		if (totalPages <= 7) {
			for (let i = 1; i < totalPages; i++) {
				pages.push(i)
			}
			return pages
		}

		if (currentPage <= 4) {
			return [1, 2, 3, 4, 5, 6, '...', totalPages]
		}

		if (currentPage >= totalPages - 3) {
			return [
				1,
				'...',
				totalPages - 5,
				totalPages - 4,
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages
			]
		}

		return [
			1,
			'...',
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2,
			'...',
			totalPages
		]
	}

	const pages = getPages()

	return (
		<div>
			<button
				disabled={currentPage <= 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				{'<'}
			</button>
			{pages.map((page, index) => (
				<button
					key={index}
					onClick={() => typeof page === 'number' && onPageChange(page)}
					disabled={page === '...'}
					style={{
						backgroundColor: currentPage === page ? '#7125ebff' : '',
						cursor: page === '...' ? 'default' : 'pointer'
					}}
				>
					{page}
				</button>
			))}
			<button
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				{'>'}
			</button>
		</div>
	)
}

export default Pagination

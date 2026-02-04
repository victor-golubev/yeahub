import { QuestionCard, useGetQuestionsQuery } from '@/entities/question'
import { ComplexityFilter } from '@/features/filter-by-complexity/ui/ComplexityFilter'
import { RateFilter } from '@/features/filter-by-rate/ui/RateFilter'
import { SkillsFilter } from '@/features/filter-by-skills/ui/SkillsFilter'
import { SpecializationList } from '@/features/filter-by-specialization/ui/SpecializationSelect'

import { Search } from '@/features/search-question/ui/Search'
import { COMPLEXITY_RANGES } from '@/shared/constants/complexity'
import Pagination from '@/shared/ui/Pagination'
import { useSearchParams } from 'react-router-dom'

const LIMIT = 10

export const QuestionsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const page = Number(searchParams.get('page') ?? 1)
	const search = searchParams.get('search') ?? undefined
	const specialization = searchParams.get('specialization') ?? undefined

	// Complexity
	const selectedComplexity = searchParams.getAll('complexity')
	const complexityValues = COMPLEXITY_RANGES.filter((r: any) =>
		selectedComplexity.includes(r.label)
	).flatMap((r: any) => r.values)
	const complexityParam = complexityValues.length
		? complexityValues.join(',')
		: undefined

	// Rate
	const selectedRate = searchParams.get('rate')?.split(',').map(Number) || []
	const rateParam = selectedRate.length ? selectedRate.join(',') : undefined

	// Skills
	const selectedSkills =
		searchParams.get('skills')?.split(',').map(Number) || []
	const skillsParam = selectedSkills.length
		? selectedSkills.join(',')
		: undefined

	const keywords = searchParams.get('keywords') ?? undefined

	const { data, isLoading, isError } = useGetQuestionsQuery({
		page,
		limit: LIMIT,
		title: search,
		specialization,
		complexity: complexityParam,
		rate: rateParam,
		skills: skillsParam,
		keywords
	})

	const handlePageChange = (nextPage: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', String(nextPage))
		setSearchParams(params)
	}

	if (isLoading) return <p>Загрузка…</p>
	if (isError) return <p>Ошибка загрузки</p>

	const questions = data?.data ?? []
	const totalPages = Math.ceil((data?.total ?? 0) / LIMIT)

	return (
		<section>
			<Search />
			<SpecializationList />
			<ComplexityFilter />
			<RateFilter />
			<SkillsFilter />

			<h2>Найдено: {data?.total ?? 0}</h2>

			<div>
				{questions.map((q: any) => (
					<QuestionCard
						key={q.id}
						id={q.id}
						title={q.title}
						complexity={q.complexity}
					/>
				))}
				{questions.length === 0 && <p>Ничего не найдено</p>}
			</div>

			<Pagination
				currentPage={page}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</section>
	)
}

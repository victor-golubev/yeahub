import {
	ComplexityFilter,
	RateFilter,
	SearchInput,
	SkillsFilter,
	SpecializationFilter,
	useQuestionFilters
} from '@/features/question-filters'
import { useQuestionFiltersData } from '../lib/useQuestionFiltersData'
import styles from './QuestionFiltersWidget.module.css'
import { QuestionFiltersWidgetSkeleton } from './QuestionFiltersWidgetSkeleton'

export const QuestionFiltersWidget = () => {
	const { filters, updateFilters } = useQuestionFilters()

	const { specializations, skills, isLoading } = useQuestionFiltersData({
		specialization: filters.specialization
	})

	if (isLoading) {
		return (
			<div className={styles.layout}>
				<QuestionFiltersWidgetSkeleton />
			</div>
		)
	}

	return (
		<div className={styles.layout}>
			<SearchInput
				value={filters.search}
				onSearch={search => updateFilters({ search })}
			/>

			<SpecializationFilter
				value={filters.specialization}
				onChange={spec => updateFilters({ specialization: spec, skills: [] })}
			/>

			<SkillsFilter
				value={filters.skills}
				onChange={skills => updateFilters({ skills })}
				specializationId={filters.specialization}
			/>

			<ComplexityFilter
				value={filters.complexity}
				onChange={complexity => updateFilters({ complexity })}
			/>

			<RateFilter
				value={filters.rate}
				onChange={rate => updateFilters({ rate })}
			/>
		</div>
	)
}

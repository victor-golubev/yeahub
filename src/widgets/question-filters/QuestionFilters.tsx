import type { QuestionFilters as Filters } from '@/features/question-filters'
import {
	ComplexityFilter,
	RateFilter,
	SearchInput,
	SkillsFilter,
	SpecializationFilter
} from '@/features/question-filters'
import styles from './QuestionFilters.module.css'

interface QuestionFiltersProps {
	filters: Filters
	onUpdate: (updates: Partial<Filters>) => void
}

export const QuestionFilters = ({
	filters,
	onUpdate
}: QuestionFiltersProps) => {
	return (
		<div className={styles.layout}>
			<SearchInput
				value={filters.search}
				onSearch={search => onUpdate({ search })}
			/>

			<SpecializationFilter
				value={filters.specialization}
				onChange={specialization => onUpdate({ specialization })}
			/>

			<SkillsFilter
				value={filters.skills}
				onChange={skills => onUpdate({ skills })}
				specializationId={filters.specialization}
			/>

			<ComplexityFilter
				value={filters.complexity}
				onChange={complexity => onUpdate({ complexity })}
			/>

			<RateFilter
				value={filters.rate}
				onChange={rate => onUpdate({ rate })}
			/>
		</div>
	)
}

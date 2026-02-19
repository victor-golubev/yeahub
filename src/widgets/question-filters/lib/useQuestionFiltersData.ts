import { useGetSkillsQuery } from '@/entities/skill'
import { useGetSpecializationsQuery } from '@/entities/specialization'

type Params = {
	specialization?: string
}

export const useQuestionFiltersData = ({ specialization }: Params) => {
	const { data: specializations, isLoading: isSpecializationsLoading } =
		useGetSpecializationsQuery()

	const { data: skills, isLoading: isSkillsLoading } = useGetSkillsQuery(
		{ specializations: specialization },
		{ skip: !specialization }
	)

	const isLoading =
		isSpecializationsLoading || (Boolean(specialization) && isSkillsLoading)

	return {
		specializations,
		skills,
		isLoading
	}
}

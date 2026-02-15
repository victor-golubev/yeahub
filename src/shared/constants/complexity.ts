export const COMPLEXITY_RANGES = [
	{ label: '1-3', values: [1, 2, 3] as const },
	{ label: '4-6', values: [4, 5, 6] as const },
	{ label: '7-8', values: [7, 8] as const },
	{ label: '9-10', values: [9, 10] as const }
] as const

export type ComplexityRange = {
	label: string
	values: readonly number[]
}

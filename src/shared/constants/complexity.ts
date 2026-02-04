export const COMPLEXITY_RANGES = [
	{ label: '1-3', values: [1, 2, 3] },
	{ label: '4-6', values: [4, 5, 6] },
	{ label: '7-8', values: [7, 8] },
	{ label: '9-10', values: [9, 10] }
] as const

export type ComplexityRange = {
	label: string
	values: readonly number[]
}

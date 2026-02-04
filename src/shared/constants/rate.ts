export const RATE_VALUES = [1, 2, 3, 4, 5] as const
export type RateValue = (typeof RATE_VALUES)[number]

// shared/lib/hooks/redux.ts

import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector
} from 'react-redux'
import type { RootState, AppDispatch } from '@/app/store'

/**
 * Типизированный хук useDispatch
 * Используй вместо обычного useDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**
 * Типизированный хук useSelector
 * Используй вместо обычного useSelector
 *
 * @example
 * const user = useAppSelector((state) => state.user)
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

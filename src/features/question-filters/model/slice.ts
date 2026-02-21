import { createSlice } from '@reduxjs/toolkit'

interface FiltersState {
	isMobileOpen: boolean
}

const initialState: FiltersState = {
	isMobileOpen: false
}

export const questionFiltersSlice = createSlice({
	name: 'questionFilters',
	initialState,
	reducers: {
		toggleFilters: state => {
			state.isMobileOpen = !state.isMobileOpen
		},
		closeFilters: state => {
			state.isMobileOpen = false
		}
	}
})

export const { toggleFilters, closeFilters } = questionFiltersSlice.actions

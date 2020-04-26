import { AppStateType } from "../reducers"

export const getUserSel = (state : AppStateType) => {
    return state.user.user
}

export const getIsLoadingSel = (state: AppStateType) => {
    return state.user.isLoading
}
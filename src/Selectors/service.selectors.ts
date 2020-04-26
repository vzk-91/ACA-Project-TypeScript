import { AppStateType } from "../reducers"

export const getServiceSel = (state : AppStateType) => {
    return state.service.services
}

export const getServiceByUserSel = (state : AppStateType) => {
     return state.service.serviceByUser
}